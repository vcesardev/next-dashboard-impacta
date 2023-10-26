import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

const RoleItem: React.FC = () => {
  return (
    <Flex align={"center"} justify={"space-between"} width={"100%"}>
      <Text w={"33%"} textAlign={"center"}>
        Admin
      </Text>
      <Text w={"33%"} textAlign={"center"}>
        Administrador do sistema
      </Text>

      <Flex w={"33%"} align={"center"} justify={"center"}>
        <Button size={"sm"} marginRight={"2"}>
          <AiOutlineEdit />
        </Button>
        <Button size={"sm"}>
          <MdOutlinePersonRemoveAlt1 />
        </Button>
      </Flex>
    </Flex>
  );
};

export default RoleItem;
