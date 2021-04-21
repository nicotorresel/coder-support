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
      <Box alignItems="center" d="flex" justifyContent="center">
        <Input m="6px" placeholder="Buscar Error" w="70%" />
        <Button>Buscar</Button>
      </Box>
      <Center m="10px">
        <Button mx="auto" onClick={onOpen}>
          Cargar tipo de Error
        </Button>
      </Center>
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
