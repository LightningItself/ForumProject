import React from "react";
import AuthButton from "./AuthButton";
import AuthModal from "../../Modals/Auth/AuthModal";
import { signOut } from "next-auth/react";
import { Flex, Button } from "@chakra-ui/react";
import { User } from "next-auth";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProp = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
};

const RightContent: React.FC<RightContentProp> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButton />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
