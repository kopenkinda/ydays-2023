import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { PropsWithChildren } from "react";

declare global {
  export type NextPageWithLayout<P = Record<string, never>> = NextPage<P> & {
    Layout?: (page: PropsWithChildren) => JSX.Element;
  };
  export type AppPropsWithLayout<P = Record<string, never>> = AppProps<P> & {
    Component: NextPageWithLayout;
  };
}
