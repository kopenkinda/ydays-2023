import type { PropsWithChildren } from 'react';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
