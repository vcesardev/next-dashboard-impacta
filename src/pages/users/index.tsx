import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import UsersHeader from "./components/UsersHeader";
import UserItem from "./components/UserItem";

const Home: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justify={"center"}
      h={"100vh"}
      bg={"blackAlpha.50"}
      w={"100vw"}
    >
      <Flex
        bg={"white"}
        w={"40%"}
        h={"40%"}
        align={"center"}
        justify={"center"}
        borderRadius={"2xl"}
        direction={"column"}
        gap={5}
      >
        <UsersHeader />
        <UserItem />
      </Flex>
    </Flex>
  );
};

export default Home;
