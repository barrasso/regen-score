import { Flex, Text, Code } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ethers } from "ethers";
import RegenScore from "../components/RegenScore";
import { WalletConnectContext } from "../contexts/walletconnect";

const ethereum = () => {
  return (window as any).ethereum;
};

const Index = () => {
  const [absolved, setAbsolved] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const context = useContext(WalletConnectContext);

  async function requestAccount() {
    if (ethereum()) {
      try {
        // Request account access if needed
        await ethereum().enable();
        const provider = new ethers.providers.Web3Provider(ethereum());
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setUserAddress(address);
        await absolveDegeneracy(signer);
      } catch (error) {
        // User denied account access
        throw new Error("User denied account access.");
      }
    } else {
      // No wallet found
      throw new Error("No wallet found.");
    }
  }

  async function absolveDegeneracy(signer: any) {
    // Absolve thyself.
    const signature = await signer.signMessage(
      "I hereby absolve myself of my degeneracy."
    );
    console.log(signature);

    setAbsolved(true);
  }

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text marginBottom="8">
            Turning <Code>Degens</Code> into <Code>Regens</Code> since 2021.
          </Text>

          <CTA setAbsolved={absolved} onClick={requestAccount} />
          {absolved && <RegenScore address={userAddress} />}
        </Flex>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Made With ❤️ in Lisboa 🇵🇹</Text>
      </Footer>
    </Container>
  );
};

export default Index;
