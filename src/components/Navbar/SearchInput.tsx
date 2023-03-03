import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput: React.FC = () => {
  return (
    <Flex flexGrow={1} mr="1rem">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          _hover={{ border: "2px solid #6FB3E6" }}
          type="text"
          placeholder="Search Forum"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
