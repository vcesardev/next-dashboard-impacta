import React from "react";
import { Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

import HeaderText from "../components/HeaderText";
import BaseOptionButton from "../components/BaseOptionButton";

const Login: React.FC = () => {
  const router = useRouter();

  const login = (): void => {
    router.replace("/home");
  };

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
        <HeaderText>Login</HeaderText>
        <Input placeholder="E-mail" size="md" type="email" w={"60%"} />
        <Input placeholder="senha" size="md" type="password" w={"60%"} />
        <BaseOptionButton pt={"6"} pb="6" onClick={login}>
          Entrar
        </BaseOptionButton>
      </Flex>
    </Flex>
  );
};

export default Login;
