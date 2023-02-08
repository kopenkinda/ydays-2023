import {
  IconList,
  IconHome,
  IconFileAnalytics,
  IconBook,
  IconUser,
} from '@tabler/icons-react';

import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <div className='fixed bottom-6 left-4 right-4  flex flex-row items-center justify-evenly rounded-full border-[1.5px] border-gray-400 bg-gray-600/30 py-5 backdrop-blur-sm'>
      <IconHome
        size={28}
        color={router.asPath === '/home' ? 'yellow' : 'white'}
      />
      <IconList
        size={28}
        color={router.asPath === '/leaderboard' ? 'yellow' : 'white'}
      />
      <IconBook
        size={28}
        color={router.asPath === '/posts' ? 'yellow' : 'white'}
      />
      <IconFileAnalytics
        size={28}
        color={router.asPath === '/analytics' ? 'yellow' : 'white'}
      />
      <IconUser
        size={28}
        color={router.asPath === '/home' ? 'yellow' : 'white'}
      />
    </div>
  );
}
