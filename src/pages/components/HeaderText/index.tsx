import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children: string;
};

const HeaderText: React.FC<Props> = ({ children }) => {
  return (
    <Text fontSize={"3xl"} textAlign={"center"} w={"100%"}>
      {children}
    </Text>
  );
};

export default HeaderText;
