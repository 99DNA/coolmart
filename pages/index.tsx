import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from "next/link";
import { Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Marketplace</Heading>
          <Button as={NextLink} href="/buy">
            Shop NFTs
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
