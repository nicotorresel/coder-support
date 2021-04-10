import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ErrorTypeModalInput = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tipo de Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>aca va la form</p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue">Crear</Button>
          <Button mr={3} variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorTypeModalInput;
