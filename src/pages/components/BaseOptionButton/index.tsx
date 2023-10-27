import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  children: string;
};

const BaseOptionButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      bg={"blue.400"}
      size="sm"
      color={"white"}
      _hover={{ bg: "blue.500" }}
      pt={"4"}
      pb={"4"}
      w={"30%"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseOptionButton;
