import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

const AuthButton = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Flex mr="6px" display={{ base: "none", md: "unset" }}>
      <Button
        mr="6px"
        variant="outline"
        colorScheme="brand"
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
      <Button
        variant="solid"
        colorScheme="brand"
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
    </Flex>
  );
};

export default AuthButton;
