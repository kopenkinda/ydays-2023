import type { PropsWithChildren } from "react";
import Header from "./Header";
import Navbar from "./navbar";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}
