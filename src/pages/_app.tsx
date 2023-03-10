import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import lightTheme from "../chakra/lightTheme";
import Layout from "../components/Layout/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={lightTheme}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        </SessionProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
