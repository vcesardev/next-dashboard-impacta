import React, { useState } from "react";
import { Flex, Button, Input } from "@chakra-ui/react";

import { AiOutlineUserAdd } from "react-icons/ai";
import HeaderText from "../../components/HeaderText";
import BaseOptionButton from "../../components/BaseOptionButton";

import { useRouter } from "next/router";
import { RoleCreatePayload } from "../../../models/Roles";
import { addRole } from "../../../services/Roles";
import { userLogout } from "../../../services/User";

const Home: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddRole = async (data: RoleCreatePayload): Promise<void> => {
    try {
      await addRole(data);
      alert("Role criada com sucesso!");
      router.push("/roles");
    } catch (err: any) {
      if (err.response?.status === 401) {
        userLogout();
        router.replace("/login");
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
        h={"50%"}
        align={"center"}
        justify={"center"}
        borderRadius={"2xl"}
        direction={"column"}
        pt={"4"}
        pb={"4"}
        gap={5}
      >
        <HeaderText>Adicionar role</HeaderText>

        <Input
          placeholder="Nome"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Descrição"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <BaseOptionButton
          leftIcon={<AiOutlineUserAdd />}
          mt={"4"}
          w={"30%"}
          onClick={(e) => handleAddRole({ name, description })}
        >
          Cadastrar
        </BaseOptionButton>

        <BaseOptionButton w={"30%"}>Cancelar</BaseOptionButton>
      </Flex>
    </Flex>
  );
};

export default Home;
