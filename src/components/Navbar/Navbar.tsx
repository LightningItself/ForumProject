import React from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import SearchInput from "./SearchInput";
import RightContent from "./RIghtContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="3rem" align="center">
      <Flex margin="1rem" align="center">
        <Image src="/images/logo.png" height="30px" />
        <Text
          fontWeight={500}
          fontFamily="sans-serif"
          fontSize={22}
          color="gray.600"
          align="center"
          display={{ base: "none", md: "unset" }}
          pl="12px"
        >
          Community
        </Text>
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
