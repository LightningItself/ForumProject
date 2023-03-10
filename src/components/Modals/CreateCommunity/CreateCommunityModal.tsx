import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

type CreateCommunitiesModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunitiesModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>This is the modal body</ModalBody>

        <ModalFooter>
          <Button colorScheme="brand" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="brand" variant="outline">
            Create Community
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateCommunityModal;
