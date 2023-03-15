import Image from 'next/image';
import { useRouter } from 'next/router';

const getTitle = (path: string) => {
  switch (path) {
    case '/register':
      return 'Register';
    case '/login':
      return 'Login';
    case '/home':
      return 'Home';
    case '/leaderboard':
      return 'Leaderboard';
    case '/articles':
      return 'Articles';
    case '/analytics':
      return 'Analytics';
    default:
      return 'Home';
  }
};

export default function Header() {
  const router = useRouter();
  const title = getTitle(router.pathname);

  return (
    <div className='sticky top-0 left-0 right-0 z-50 flex items-center py-4'>
      <Image src='/assets/logo.svg' alt='' width='24' height='18' />
      <h1 className='ml-2 text-xl font-bold'>{title}</h1>
    </div>
  );
}
