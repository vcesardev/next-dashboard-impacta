import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

import { BaseRole } from "../../../../models/Roles";

type Props = {
  data: BaseRole;
  editRole: (data: BaseRole) => void;
  deleteRole: (data: BaseRole) => void;
};

const RoleItem: React.FC<Props> = ({ data, deleteRole, editRole }) => {
  return (
    <Flex align={"center"} justify={"space-between"} width={"100%"}>
      <Text w={"33%"} textAlign={"center"}>
        {data.name}
      </Text>
      <Text w={"33%"} textAlign={"center"}>
        {data.description}
      </Text>

      <Flex w={"33%"} align={"center"} justify={"center"}>
        <Button size={"sm"} marginRight={"2"} onClick={() => editRole(data)}>
          <AiOutlineEdit />
        </Button>
        <Button size={"sm"} onClick={() => deleteRole(data)}>
          <MdOutlinePersonRemoveAlt1 />
        </Button>
      </Flex>
    </Flex>
  );
};

export default RoleItem;
