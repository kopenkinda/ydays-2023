import { Avatar, Box, Button } from '@chakra-ui/react';
import { IconLogin } from '@tabler/icons';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <Box
      px='4'
      py='2'
      className='sticky top-0 flex border-b border-gray-200'
      bg='white'
    >
      <div className='ml-auto'>
        {status === 'unauthenticated' && (
          <Button onClick={() => signIn()}>
            <IconLogin size={18} />
          </Button>
        )}
        {status === 'authenticated' && (
          <Avatar
            size='sm'
            src={session.user?.image || void 0}
            onClick={() => signOut()}
          />
        )}
      </div>
    </Box>
  );
}
