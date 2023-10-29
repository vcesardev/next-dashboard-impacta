import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import HeaderText from "../../../components/HeaderText";
import BaseOptionButton from "../../../components/BaseOptionButton";

type Props = {
  addNewUser: () => void;
};

const UsersHeader: React.FC<Props> = ({ addNewUser }) => {
  return (
    <>
      <Flex w={"80%"} align={"center"} justify={"space-between"}>
        <Box w={"30%"}>
          {/* <Button bg={"blue.400"} size="sm" color={"white"} pt={"4"} pb={"4"}>
      Roles
    </Button> */}
        </Box>

        <HeaderText>Usuários cadastrados</HeaderText>

        <Box w={"30%"}>
          <BaseOptionButton onClick={addNewUser} w={"100%"}>
            Adicionar Usuário
          </BaseOptionButton>
        </Box>
      </Flex>
      <Flex w={"100%"} align={"center"} justify={"space-between"}>
        <Text w={"25%"} textAlign={"center"}>
          Nome
        </Text>

        <Text w={"25%"} textAlign={"center"}>
          Username
        </Text>

        <Text w={"25%"} textAlign={"center"}>
          Role
        </Text>

        <Text w={"25%"} textAlign={"center"}>
          Ações
        </Text>
      </Flex>
    </>
  );
};

export default UsersHeader;
