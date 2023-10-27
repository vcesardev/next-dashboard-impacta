import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import HeaderText from "../../../components/HeaderText";

const RolesHeader: React.FC = () => {
  return (
    <>
      <Flex w={"80%"} align={"center"} justify={"space-between"}>
        <Box w={"30%"}>
          {/* <Button bg={"blue.400"} size="sm" color={"white"} pt={"4"} pb={"4"}>
      Roles
    </Button> */}
        </Box>

        <HeaderText>Roles</HeaderText>

        <Box w={"30%"} />
      </Flex>
      <Flex w={"100%"} align={"center"} justify={"space-between"}>
        <Text w={"33%"} textAlign={"center"}>
          Nome
        </Text>

        <Text w={"33%"} textAlign={"center"}>
          Descrição
        </Text>

        <Text w={"33%"} textAlign={"center"}>
          Ações
        </Text>
      </Flex>
    </>
  );
};

export default RolesHeader;
