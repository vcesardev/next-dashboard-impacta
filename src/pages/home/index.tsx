import React from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";

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
        <Text fontSize={"3xl"}>Usuários Cadastrados</Text>

        <Flex w={"80%"} align={"center"} justify={"space-between"}>
          <Button
            bg={"blue.400"}
            size="sm"
            color={"white"}
            pt={"4"}
            pb={"4"}
            w={"30%"}
          >
            Roles
          </Button>

          <Button
            bg={"blue.400"}
            size="sm"
            color={"white"}
            pt={"4"}
            pb={"4"}
            w={"30%"}
          >
            Novo Usuário
          </Button>

          <Button
            bg={"blue.400"}
            size="sm"
            color={"white"}
            pt={"4"}
            pb={"4"}
            w={"30%"}
          >
            Sair
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
