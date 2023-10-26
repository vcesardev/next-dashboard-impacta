import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const UsersHeader: React.FC = () => {
  return (
    <>
      <Flex w={"80%"} align={"center"} justify={"space-between"}>
        <Box w={"30%"}>
          {/* <Button bg={"blue.400"} size="sm" color={"white"} pt={"4"} pb={"4"}>
      Roles
    </Button> */}
        </Box>

        <Text fontSize={"3xl"}>Usuários</Text>

        <Box w={"30%"} />
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
