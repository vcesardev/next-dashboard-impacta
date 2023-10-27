import React from "react";
import { Flex, Button, Input } from "@chakra-ui/react";
import { LiaUserEditSolid } from "react-icons/lia";

import HeaderText from "../../components/HeaderText";
import BaseOptionButton from "../../components/BaseOptionButton";

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
        <HeaderText>Editar Role</HeaderText>

        <Input placeholder="Nome" size="sm" w={"60%"} borderRadius={"md"} />
        <Input
          placeholder="Descrição"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
        />

        <BaseOptionButton leftIcon={<LiaUserEditSolid />} mt={"4"} w={"30%"}>
          Editar
        </BaseOptionButton>

        <Button w={"30%"}>Cancelar</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
