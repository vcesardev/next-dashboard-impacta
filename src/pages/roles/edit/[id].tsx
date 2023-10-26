import React from "react";
import { Flex, Text, Box, Button, Input } from "@chakra-ui/react";

import { LiaUserEditSolid } from "react-icons/lia";

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
        h={"50%"}
        align={"center"}
        justify={"center"}
        borderRadius={"2xl"}
        direction={"column"}
        pt={"4"}
        pb={"4"}
        gap={5}
      >
        <Text fontSize={"3xl"}>Editar Role</Text>

        <Input placeholder="Nome" size="sm" w={"60%"} borderRadius={"md"} />
        <Input
          placeholder="Descrição"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
        />

        <Button leftIcon={<LiaUserEditSolid />} mt={"4"} w={"30%"}>
          Editar
        </Button>

        <Button w={"30%"}>Cancelar</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
