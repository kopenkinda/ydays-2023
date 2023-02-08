import { IconLogin } from '@tabler/icons-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  let title = '';
  if (router.pathname === '/posts') {
    title = 'Articles';
  } else if (router.pathname === '/analytics') {
    title = 'Analytics';
  } else {
    title = 'Home';
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 h-10 bg-[#181818]'>
      <div className='mt-4 ml-6 flex flex-row'>
        <svg
          width='24'
          height='18'
          viewBox='0 0 24 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 0L3.81104 1.11894L7.4759 2.19496L12.035 3.53353L16.5676 2.19496L20.1702 1.13101L24 0V14.0991L15.8647 16.5016L12.035 17.6327L8.22394 16.5137L0 14.0991V0ZM4.0233 5.3528L5.53979 5.79051L10.2352 7.14574L12.0232 7.66184L13.8009 7.14574L18.4526 5.79525L19.9767 5.3528V11.1254L13.5613 12.9597L12.0232 13.3994L10.4927 12.9644L4.0233 11.1254V5.3528Z'
            fill='white'
          />
        </svg>
        <h1 className='ml-6 text-xl font-bold'>{title}</h1>
      </div>
    </div>
    // <Box
    //   px='4'
    //   py='2'
    //   className='sticky top-0 flex border-b border-gray-200'
    //   bg='white'
    // >
    //   <div className='ml-auto'>
    //     {status === 'unauthenticated' && (
    //       <Button onClick={() => signIn()}>
    //         <IconLogin size={18} />
    //       </Button>
    //     )}
    //     {status === 'authenticated' && (
    //       <Avatar
    //         size='sm'
    //         src={session.user?.image || void 0}
    //         onClick={() => signOut()}
    //       />
    //     )}
    //   </div>
    // </Box>
  );
}
