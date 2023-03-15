import {router, publicProcedure, protectedProcedure} from "../trpc";
import * as z from "zod";
import bcrypt from "bcrypt";
import {bridgeClient} from "../../../utils/client";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(12),
});

export const signUpSchema = loginSchema.extend({
})

export const authRouter = router({
    getSession: publicProcedure.query(({ctx}) => {
        return ctx.session;
    }),
    getSecretMessage: protectedProcedure.query(() => {
        return "You are logged in and can see this secret message!";
    }),
    register: publicProcedure
        .input(signUpSchema)
        .mutation(async ({ctx, input}) => {
            const {email, password} = input;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await ctx.prisma.user.findFirst({
                where: {email}
            });
            if (!user) {
                await ctx.prisma.user.create({
                    data: {
                        email,
                        password: hashedPassword,
                    }
                });
            } else {
                throw new Error("User already exists");
            }
        }),
    checkUser: publicProcedure
        .input(loginSchema)
        .mutation(async ({ctx, input}) => {
            const {email} = input;
            const user = await ctx.prisma.user.findFirst({
                where: {email}
            });
            if (!user) {
                throw new Error("User does not exist");
            } else {
                return true;
            }
        }),
    RegisterBridgeUser: publicProcedure
        .input(z.object({email: z.string(), code: z.string()}))
        .mutation(async ({ctx, input}) => {
           await bridgeClient.createUser(input.email, input.code);
        }),
});


export type ILogin = z.infer<typeof loginSchema>
export type ISignUp = z.infer<typeof signUpSchema>
