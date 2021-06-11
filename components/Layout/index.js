import Head from "next/head";
import Header from "../Header";
import { LayoutStyle } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>OKHI</title>
        <meta name="description" content="geo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutStyle>
        <Header />

        <div> {children}</div>
      </LayoutStyle> 
    </>
  );
};
export default Layout;
