import React, { useState, useEffect } from "react";
import { Center, Stack } from "@chakra-ui/react";

import firebase from "../firebase";
import ErrorCard from "../components/error-card";

const ErrorPage = () => {
  const ref = firebase.firestore().collection("error");
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
      <Center>ERRORES</Center>;
      <Stack mt={10} spacing={3}>
        {errors &&
          errors.map((error, key) => {
            return <ErrorCard key={error} content={error} />;
          })}
      </Stack>
    </Stack>
  );
};

export default ErrorPage;
