import type { PropsWithChildren } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navbar />
    </>
  );
}
