import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import HeaderText from "../../../components/HeaderText";
import BaseOptionButton from "../../../components/BaseOptionButton";

type Props = {
  addNewRole: () => void;
  goBack: () => void;
};

const RolesHeader: React.FC<Props> = ({ addNewRole, goBack }) => {
  return (
    <>
      <Flex w={"80%"} align={"center"} justify={"space-between"}>
        <Box w={"30%"}>
          <BaseOptionButton
            onClick={goBack}
            w={"100%"}
            bg={"blackAlpha.400"}
            _hover={{ bg: "blackAlpha.600" }}
          >
            Voltar
          </BaseOptionButton>
        </Box>

        <HeaderText>Roles</HeaderText>

        <Box w={"30%"}>
          <BaseOptionButton onClick={addNewRole} w={"100%"}>
            Adicionar Role
          </BaseOptionButton>
        </Box>
      </Flex>
      <Flex w={"100%"} align={"center"} justify={"space-between"}>
        <Text w={"33%"} textAlign={"center"}>
          Nome
        </Text>

        <Text w={"33%"} textAlign={"center"}>
          Descrição
        </Text>

        <Text w={"33%"} textAlign={"center"}>
          Ações
        </Text>
      </Flex>
    </>
  );
};

export default RolesHeader;
