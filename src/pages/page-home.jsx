import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";

import ErrorTypeModalInput from "../components/error-type-modal-input";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Cargar tipo de Error</Button>

      <ErrorTypeModalInput isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PageHome;
