import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function AuthStep() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const handleLogin = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await signIn('credentials', {
      email: user,
      password: password,
      redirect: false,
      type: 'login',
    });
    router.push('/test');
  };

  return (
    <form onSubmit={handleLogin}>
      {loginError}
      <div className='mx-auto max-w-lg '>
        <div className='py-1'>
          <div className='py-1'>
            <span className='px-1 text-sm text-gray-600'>Username</span>
            <input
              placeholder=''
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className='text-md block w-full rounded-lg border-2 border-gray-300
                bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none'
            />
          </div>
          <div className='py-1'>
            <span className='px-1 text-sm text-gray-600'>Email</span>
            <input
              placeholder=''
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='text-md block w-full rounded-lg border-2 border-gray-300
                bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none'
            />
          </div>
        </div>

        <button
          type='submit'
          className='mt-3 block w-full
            rounded-lg bg-gray-800 px-6 text-lg
            font-semibold text-white shadow-xl hover:bg-black hover:text-white'
        >
          Register
        </button>
      </div>
    </form>
  );
}
