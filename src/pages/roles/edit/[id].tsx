import React, { useState, useEffect } from "react";
import { Flex, Button, Input } from "@chakra-ui/react";
import { LiaUserEditSolid } from "react-icons/lia";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

import HeaderText from "../../components/HeaderText";
import BaseOptionButton from "../../components/BaseOptionButton";

import { editRole, getRole } from "../../../services/Roles";
import { userLogout } from "../../../services/User";

import { RoleEditPayload } from "../../../models/Roles";

const Home: React.FC = () => {
  const router = useRouter();
  const params = useParams();

  const { id } = params;

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const loadUserData = async (): Promise<void> => {
    try {
      const response = await getRole(id);

      if (response) {
        setName(response.data.name);
        setDescription(response.data.description);
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        userLogout();
        router.replace("/login");
      }
    }
  };

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditRole = async (data: RoleEditPayload): Promise<void> => {
    try {
      for (const item of Object.values(data)) {
        if (item.length < 1) {
          alert("Preencha todos os campos!");
          return;
        }
      }

      await editRole(
        {
          name: data.name,
          description: data.description,
        },
        id.toString()
      );

      alert("Usuário editado com sucesso.");

      router.replace("/roles");
    } catch (e: any) {
      if (e.response?.status === 401) {
        userLogout();
        router.replace("/login");
        return;
      } else {
        alert(e.message);
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
        <HeaderText>Editar Role</HeaderText>

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
          leftIcon={<LiaUserEditSolid />}
          mt={"4"}
          w={"30%"}
          onClick={() => handleEditRole({ description, name })}
        >
          Editar
        </BaseOptionButton>

        <Button
          w={"30%"}
          onClick={() => {
            router.replace("/roles");
          }}
        >
          Cancelar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
