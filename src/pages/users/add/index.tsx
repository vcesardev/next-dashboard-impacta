import React, { useState, useEffect } from "react";
import { Flex, Select, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LiaUserEditSolid } from "react-icons/lia";

import HeaderText from "../../components/HeaderText";

import { BaseRole } from "../../../models/Roles";

import { getRoles } from "../../../services/Roles";
import { UserCreatePayload } from "../../../models/User";
import { postUser } from "../../../services/User";

import { logoutUser } from "../../../services/Auth";

const AddUser: React.FC = () => {
  const router = useRouter();

  const [roles, setRoles] = useState<BaseRole[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const fetchRoles = async (): Promise<void> => {
    try {
      const response = await getRoles();
      setRoles(response.data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        logoutUser();
        router.replace("/login");
      }
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleCreate = async (data: UserCreatePayload): Promise<void> => {
    try {
      for (const item of Object.values(data)) {
        if (item.length < 1) {
          alert("Preencha todos os campos!");
          return;
        }
      }

      if (data.password !== data.confirmPassword) {
        alert("Os campos de senha devem ser iguais!");
        return;
      }

      if (selectedRole.length < 1) {
        alert("Selecione uma role.");
        return;
      }

      await postUser({
        name: data.name,
        password: data.password!,
        username: data.username,
        roles: selectedRole,
      });

      alert("Usuário criado com sucesso.");

      router.replace("/users");
    } catch (e: any) {
      console.log(e.response);
      if (e.response?.status === 401) {
        logoutUser();
        router.replace("/login");
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
        h={"70%"}
        align={"center"}
        justify={"center"}
        borderRadius={"2xl"}
        direction={"column"}
        pt={"4"}
        pb={"4"}
        gap={5}
      >
        <HeaderText>Novo usuário</HeaderText>

        <Input
          placeholder="Nome"
          size="md"
          w={"60%"}
          borderRadius={"md"}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Nome de usuário"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Select
          placeholder="Selecione uma role"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          onChange={handleSelectChange}
          value={selectedRole}
        >
          {roles.map((role) => (
            <option key={role.id}>{role.name}</option>
          ))}
        </Select>
        <Input
          placeholder="Senha"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme a senha"
          size="sm"
          w={"60%"}
          borderRadius={"md"}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          leftIcon={<LiaUserEditSolid />}
          mt={"4"}
          w={"30%"}
          onClick={() =>
            handleCreate({
              confirmPassword,
              name,
              password,
              roles: selectedRole,
              username,
            })
          }
        >
          Adicionar
        </Button>

        <Button w={"30%"} onClick={() => router.replace("/users")}>
          Cancelar
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddUser;
