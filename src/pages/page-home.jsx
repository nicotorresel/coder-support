import React, { useContext } from "react";
import { Button, useDisclosure, Input, Box, Stack } from "@chakra-ui/react";

import ErrorTypeCard from "../components/error-type-card";
import ErrorTypeForm from "../components/error-type-form";
import DataBaseContext from "../application/database-provider";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dataDB = useContext(DataBaseContext);
  const errorTypeCollection = dataDB.getCollection("error_type");

  return (
    <Box>
      <Stack alignItems="center" direction="row" justifyContent="center">
        <Button m="6px" onClick={onOpen}>
          Cargar Error
        </Button>
        <Button m="6px" onClick={onOpen}>
          Cargar tipo de Error
        </Button>
      </Stack>
      <ErrorTypeForm isOpen={isOpen} onClose={onClose} />
      <Stack mt={10} spacing={3}>
        {errorTypeCollection &&
          errorTypeCollection.find().map((error, key) => {
            return <ErrorTypeCard key={error} content={error} />;
          })}
      </Stack>
    </Box>
  );
};

export default PageHome;
