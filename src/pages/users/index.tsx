import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import UsersHeader from "./components/UsersHeader";
import UserItem from "./components/UserItem";
import { BaseUser } from "../../models/User";
import { getUsers } from "../../services/User";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<BaseUser[]>([]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err: any) {
      if (err.response.status === 401) {
        alert("Sua sessão expirou, faça login novamente.");
        router.replace("/login");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // TODO HANDLE USER DELETE
  const handleDelete = (data: BaseUser) => {
    console.log("delete", data);
  };

  // TODO HANDLE USER EDIT
  const handleEdit = (data: BaseUser) => {
    console.log("delete", data);
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
        <UsersHeader />
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
