import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Icon,
  Flex,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { User } from "next-auth";
import { VscAccount } from "react-icons/vsc";
import { IoGrid } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { signOut } from "next-auth/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type UserMenuProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        as={Button}
        cursor="pointer"
        borderRadius={4}
        padding="0px 6px"
        mr="2px"
        _hover={{ border: "1px solid", borderColor: "brand.600", mr: "0px" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon as={IoGrid} fontSize={20} color="gray.700" mr={2} />
                <Flex
                  direction="column"
                  display={{ base: "none", lg: "flex" }}
                  fontSize="8pt"
                  align="flex-start"
                  mr={8}
                >
                  <Text fontWeight={700}>
                    {user?.name || user.email?.split("@")[0]}
                  </Text>
                  <Flex>
                    <Text color="gray.500">54 points</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize={22} color="gray.400" mr={2} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.100" }}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize="20" mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.1000" }}
              onClick={() => signOut()}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize="20" mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "gray.100" }}
              onClick={() => setAuthModalState({ open: true, view: "login" })}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize="20" mr={2} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
