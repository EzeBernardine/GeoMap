import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../config/theme";
import { ProviderContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderContext>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ProviderContext>
  );
}

export default MyApp;
