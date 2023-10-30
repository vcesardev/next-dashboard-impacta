import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import RolesHeader from "./components/RolesHeader";
import RoleItem from "./components/RoleItem";

import { BaseRole } from "../../models/Roles";

import { deleteRole, getRoles } from "../../services/Roles";
import { userLogout } from "../../services/User";

const Home: React.FC = () => {
  const router = useRouter();

  const [roles, setRoles] = useState<BaseRole[]>([]);

  const loadRoles = async (): Promise<void> => {
    try {
      const response = await getRoles();
      setRoles(response.data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        userLogout();
        router.replace("/login");
      }
    }
  };

  useEffect(() => {
    loadRoles();
  }, []);

  const handleAddNewRole = (): void => {
    router.push("/roles/add");
  };

  const handleGoBack = (): void => {
    router.push("/home");
  };

  const handleDelete = async (data: BaseRole) => {
    try {
      await deleteRole(data.id.toString());
      alert("Role deletada!");
      await loadRoles();
    } catch (err: any) {
      if (err.response?.status === 401) {
        userLogout();
        router.replace("/login");
      }
    }
  };

  const handleEdit = async (data: BaseRole): Promise<void> => {
    router.push(`/roles/edit/${data.id}`);
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
        <RolesHeader addNewRole={handleAddNewRole} goBack={handleGoBack} />
        {roles.map((role) => (
          <RoleItem
            editRole={handleEdit}
            deleteRole={handleDelete}
            data={role}
            key={role.id}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
