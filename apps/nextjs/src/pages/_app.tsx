import { ClerkProvider } from "@clerk/nextjs";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const DefaultLayout = Layout;

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
