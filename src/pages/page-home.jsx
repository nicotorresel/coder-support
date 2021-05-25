import React, { useEffect, useState } from "react";
import { Button, useDisclosure, Box, Stack } from "@chakra-ui/react";

import ErrorTypeCard from "../components/error-type-card";
import ErrorTypeForm from "../components/error-type-form";
import firebase from "../firebase";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState([]);
  const ref = firebase.firestore().collection("error");

  function getErrors() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setErrors(items);
    });
  }

  useEffect(() => {
    getErrors();
  }, []);

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
        {errors &&
          errors.map((error, key) => {
            return <ErrorTypeCard key={error} content={error} />;
          })}
      </Stack>
    </Box>
  );
};

export default PageHome;
