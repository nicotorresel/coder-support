import React, { useContext } from "react";
import { Button, useDisclosure, Input, Box, Center } from "@chakra-ui/react";

import ErrorTypeCard from "../components/error-type-card";
import ErrorTypeModalInput from "../components/error-type-modal-input";
import DataBaseContext from "../application/database-provider";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dataDB = useContext(DataBaseContext);
  const errorTypeCollection = dataDB.getCollection("error_type");

  return (
    <Box>
      <Box alignItems="center" bg="purple.600" d="flex" justifyContent="center">
        <Input bg="white" m="6px" placeholder="Buscar Error" w="70%" />
        <Button>Buscar</Button>
      </Box>
      <Box d="flex" justifyContent="center">
        <Button m="6px" onClick={onOpen}>
          Cargar Error
        </Button>
        <Button m="6px" onClick={onOpen}>
          Cargar tipo de Error
        </Button>
      </Box>
      <ErrorTypeModalInput isOpen={isOpen} onClose={onClose} />
      <Box>
        {errorTypeCollection &&
          errorTypeCollection.find().map((error, key) => {
            return <ErrorTypeCard key={error} content={error} />;
          })}
      </Box>
    </Box>
  );
};

export default PageHome;
