import WalletConnectClient from "@walletconnect/client";
import { providers } from "ethers";
import { createContext, useState } from "react";

export const WalletConnectContext = createContext(
  {} as Record<"getClient", () => Promise<WalletConnectClient>>
);

export default function WalletConnectContextProvider({ children }) {
  const [client, setClient] = useState<null | WalletConnectClient>(null);

  const getClient = async () => {
    if (!client) {
      const newClient = await WalletConnectClient.init({
        relayProvider: "wss://relay.walletconnect.com",
        apiKey: process.env.walletconnect_api_key,
      });
      const session = await newClient.connect({
        permissions: {
          blockchain: {
            chains: ["eip155:1"],
          },
          jsonrpc: {
            methods: [
              "eth_sendTransaction",
              "personal_sign",
              "eth_signTypedData",
            ],
          },
        },
      });
      const provider = new providers.Web3Provider(newClient as any);
      console.log(provider);
      setClient(newClient);
      return newClient;
    }
    return client;
  };

  return (
    <WalletConnectContext.Provider value={{ getClient }}>
      {children}
    </WalletConnectContext.Provider>
  );
}
