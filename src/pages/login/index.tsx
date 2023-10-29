import React, { useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

import HeaderText from "../components/HeaderText";
import BaseOptionButton from "../components/BaseOptionButton";
import { postLogin } from "../../services/Auth";
import { authRepository } from "../../repositories/auth.repository";

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async (): Promise<void> => {
    try {
      const response = await postLogin({ username, password });
      authRepository.setLoggedUser(response.data);
      router.replace("/home");
    } catch (err: any) {
      if (err.response.status === 401) {
        alert("Login e/ou senha incorretos!");
      }
    }
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
        <Input
          placeholder="E-mail"
          size="md"
          type="email"
          w={"60%"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Senha"
          size="md"
          type="password"
          w={"60%"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BaseOptionButton pt={"6"} pb="6" onClick={signIn}>
          Entrar
        </BaseOptionButton>
      </Flex>
    </Flex>
  );
};

export default Login;
