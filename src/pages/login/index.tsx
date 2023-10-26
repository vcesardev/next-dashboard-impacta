import React from "react";
import { Flex, Text, Input, Button } from "@chakra-ui/react";

const Login: React.FC = () => {
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
        <Text fontSize={"3xl"}>Login</Text>
        <Input placeholder="E-mail" size="md" type="email" w={"60%"} />
        <Input placeholder="senha" size="md" type="password" w={"60%"} />
        <Button
          bg={"blue.400"}
          size="sm"
          color={"white"}
          pt={"6"}
          pb={"6"}
          w={"20%"}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
