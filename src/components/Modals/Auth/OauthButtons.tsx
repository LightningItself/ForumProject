import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const OauthButtons: React.FC = () => {
  const handleLogin = () => {
    signIn("google");
  };
  return (
    <Flex>
      <Button colorScheme="brand" variant="outline" onClick={handleLogin}>
        Log In with Google
      </Button>
    </Flex>
  );
};

export default OauthButtons;
