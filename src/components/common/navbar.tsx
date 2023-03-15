import type { TablerIconsProps } from '@tabler/icons-react';
import {
  IconList,
  IconHome,
  IconFileAnalytics,
  IconBook,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Navbar() {
  return (
    <div className='fixed bottom-2 left-2 right-2 flex flex-row items-center justify-evenly rounded-full border border-gray-400 bg-gray-600/30 py-2 backdrop-blur-sm'>
      <NavbarIcon icon={IconHome} href='/' exact />
      <NavbarIcon icon={IconList} href='/leaderboard' />
      <NavbarIcon icon={IconBook} href='/articles' />
      <NavbarIcon icon={IconFileAnalytics} href='/analytics' />
      <NavbarIcon icon={IconUser} href='/profile' />
    </div>
  );
}

const colorForPath =
  (path: string) =>
  (desired: string, exact = false) => {
    if (exact) return path === desired ? 'yellow' : 'white';
    return path.startsWith(desired) ? 'yellow' : 'white';
  };

function NavbarIcon({
  href,
  icon: Icon,
  exact = false,
}: {
  icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  exact?: boolean;
}) {
  const router = useRouter();
  const color = colorForPath(router.asPath);
  return (
    <Link href={href} className='p-2'>
      <Icon size={24} color={color(href, exact)} />
    </Link>
  );
}
