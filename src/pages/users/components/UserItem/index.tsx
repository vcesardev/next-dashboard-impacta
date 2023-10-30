import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

import { BaseUser } from "../../../../models/User";

type Props = {
  data: BaseUser;
  onPressEdit: (data: BaseUser) => void;
  onPressDelete: (data: BaseUser) => void;
};

const UserItem: React.FC<Props> = ({ data, onPressDelete, onPressEdit }) => {
  return (
    <Flex align={"center"} justify={"space-between"} width={"100%"}>
      <Text w={"25%"} textAlign={"center"}>
        {data.name}
      </Text>
      <Text w={"25%"} textAlign={"center"}>
        {data.username}
      </Text>
      <Text w={"25%"} textAlign={"center"}>
        {data.roles}
      </Text>

      <Flex w={"25%"} align={"center"} justify={"center"}>
        <Button size={"sm"} marginRight={"2"} onClick={() => onPressEdit(data)}>
          <AiOutlineEdit />
        </Button>
        <Button size={"sm"} onClick={() => onPressDelete(data)}>
          <MdOutlinePersonRemoveAlt1 />
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserItem;
