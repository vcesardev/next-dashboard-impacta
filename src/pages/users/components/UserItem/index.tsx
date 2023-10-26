import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

const UserItem: React.FC = () => {
  return (
    <Flex align={"center"} justify={"space-between"} width={"100%"}>
      <Text w={"25%"} textAlign={"center"}>
        Vitor
      </Text>
      <Text w={"25%"} textAlign={"center"}>
        vcesarr
      </Text>
      <Text w={"25%"} textAlign={"center"}>
        Admin
      </Text>

      <Flex w={"25%"} align={"center"} justify={"center"}>
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

export default UserItem;
