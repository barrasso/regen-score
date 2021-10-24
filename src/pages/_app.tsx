import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import WalletConnectContextProvider from "../contexts/walletconnect";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/12361/regen-score/0.0.5",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ApolloProvider client={client}>
        <WalletConnectContextProvider>
          <Component {...pageProps} />
        </WalletConnectContextProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
