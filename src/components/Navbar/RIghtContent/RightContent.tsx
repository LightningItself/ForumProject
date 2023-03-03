import React from "react";
import AuthButton from "./AuthButton";
import AuthModal from "../../Modals/Auth/AuthModal";

type RightContentProp = {};

const RightContent: React.FC<RightContentProp> = () => {
  return (
    <>
      <AuthModal />
      <AuthButton />
    </>
  );
};

export default RightContent;
