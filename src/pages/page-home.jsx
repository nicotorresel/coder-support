import React, { useContext } from "react";
import { Button, useDisclosure, Input, Box } from "@chakra-ui/react";

import ErrorTypeCard from "../components/error-type-card";
import ErrorTypeForm from "../components/error-type-form";
import DataBaseContext from "../application/database-provider";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dataDB = useContext(DataBaseContext);
  const errorTypeCollection = dataDB.getCollection("error_type");

  return (
    <Box>
      <Box d="flex" justifyContent="center">
        <Button m="6px" onClick={onOpen}>
          Cargar Error
        </Button>
        <Button m="6px" onClick={onOpen}>
          Cargar tipo de Error
        </Button>
      </Box>
      <ErrorTypeForm isOpen={isOpen} onClose={onClose} />
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
