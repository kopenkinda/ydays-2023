import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {loginSchema} from "../../../server/trpc/router/auth";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        email: {label: 'email', type: 'email', placeholder: 'example@email.com'},
        password: {label: "Password", type: "password"},
      },
      async authorize(credential, req){
          const creds = await loginSchema.parseAsync(credential);
          const user = await prisma.user.findFirst({
            where: {email: creds.email}
          });
          if(!user){
            return null;
          }
          return {
            id: user.id,
            email: user.email,
            username: user.name,
          };
      },
    }),
  ],
};

export default NextAuth(authOptions);
