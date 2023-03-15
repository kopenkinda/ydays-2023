import React, {SyntheticEvent} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

export default function AuthStep() {
    const router = useRouter();
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState('');
    const handleLogin = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await signIn("credentials", {
            email: user,
            password: password,
            redirect: false,
            type: "login"
        })
        router.push('/test')
    }

    return (
        <form onSubmit={handleLogin}>
            {loginError}
            <div className="mx-auto max-w-lg ">
                <div className="py-1">
                    <div className="py-1">
                        <span className="px-1 text-sm text-gray-600">Username</span>
                        <input placeholder="" type="text"
                               value={user} onChange={(e) => setUser(e.target.value)}
                               className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    </div>
                    <div className="py-1">
                        <span className="px-1 text-sm text-gray-600">Email</span>
                        <input placeholder="" type="password"
                               value={password} onChange={(e) => setPassword(e.target.value)}
                               className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    </div>
                </div>

                <button type='submit' className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 block shadow-xl hover:text-white hover:bg-black">
                    Register
                </button>
            </div>
        </form>
    )
}