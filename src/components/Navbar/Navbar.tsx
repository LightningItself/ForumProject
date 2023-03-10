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
import { useSession } from "next-auth/react";
import Directory from "./Directory/Directory";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Flex
      bg="white"
      height="3rem"
      align="center"
      pr={2}
      justify={{ md: "space-between" }}
    >
      <Flex
        margin="1rem"
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image alt="IIT-BBS Logo" src="/images/logo.png" height="30px" />
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
      {session?.user && <Directory />}
      <SearchInput user={session?.user} />
      <RightContent user={session?.user} />
    </Flex>
  );
};

export default Navbar;
