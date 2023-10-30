import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import UsersHeader from "./components/UsersHeader";
import UserItem from "./components/UserItem";

import { BaseUser } from "../../models/User";

import { deleteUser, getUsers } from "../../services/User";

import { authRepository } from "../../repositories/auth.repository";

const Home: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<BaseUser[]>([]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        alert("Sua sessão expirou, faça login novamente.");
        authRepository.removeLoggedUser();
        router.replace("/login");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (data: BaseUser) => {
    try {
      await deleteUser(data.id.toString());
    } catch (err: any) {
      if (err.response?.status === 401) {
        alert("Sessão Expirada, faça login novamente!");
        authRepository.removeLoggedUser();
        router.replace("/login");
      }
    }
  };

  const handleEdit = async (data: BaseUser): Promise<void> => {
    router.push(`/users/edit/${data.id}`);
  };

  const handleAddNewUser = (): void => {
    router.push("/users/add");
  };

  const handleGoBack = (): void => {
    router.push("/home");
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
        <UsersHeader addNewUser={handleAddNewUser} goBack={handleGoBack} />
        {users?.map((user) => (
          <UserItem
            data={user}
            key={user.id}
            onPressDelete={handleDelete}
            onPressEdit={handleEdit}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
