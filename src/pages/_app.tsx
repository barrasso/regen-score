import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import WalletConnectContextProvider from "../contexts/walletconnect";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
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
