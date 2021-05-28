import React, { useState, useEffect } from "react";
import { Center, Stack } from "@chakra-ui/react";

import firebase from "../firebase";
import ErrorTypeCard from "../components/error-type-card";

const ErrorTypePage = () => {
  const ref = firebase.firestore().collection("errorType");
  const [errors, setErrors] = useState([]);

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
    <Stack>
      <Center>TIPOS DE ERRORES</Center>;
      <Stack mt={10} spacing={3}>
        {errors &&
          errors.map((error, key) => {
            return <ErrorTypeCard key={error} content={error} />;
          })}
      </Stack>
    </Stack>
  );
};

export default ErrorTypePage;
