import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import HeaderText from "../components/HeaderText";
import BaseOptionButton from "../components/BaseOptionButton";

import { BaseUser } from "../../models/User";

import { authRepository } from "../../repositories/auth.repository";

const Home: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<BaseUser>({} as BaseUser);

  const getUserData = async (): Promise<void> => {
    try {
      const data: BaseUser | undefined = authRepository.getLoggedUser();
      if (data) {
        setUser(data);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const navigateUsers = (): void => {
    router.push("/users");
  };

  const navigateRoles = (): void => {
    router.push("/roles");
  };

  const logout = (): void => {
    authRepository.removeLoggedUser();
    router.replace("/login");
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
        <HeaderText>{`${user.name?.split(" ")[0]}, Bem vindo!`}</HeaderText>

        <Flex w={"80%"} align={"center"} justify={"space-between"}>
          <BaseOptionButton onClick={navigateUsers}>Usuários</BaseOptionButton>

          <BaseOptionButton onClick={navigateRoles}>Roles</BaseOptionButton>

          <BaseOptionButton onClick={logout}>Sair</BaseOptionButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
