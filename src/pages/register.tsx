import * as React from "react";
import Link from "next/link";
import {useState} from "react";
import {trpc} from "../utils/trpc";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerMutation = trpc.auth.register.useMutation();

    const registerUser = (event: any) => {
        event.preventDefault();
        registerMutation.mutateAsync({
            email: email,
            password: password,
        })
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={registerUser}>
                <label>
                    Email: <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type='submit'>Register User</button>
            </form>
        </>
    )
}