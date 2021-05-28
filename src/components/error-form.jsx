import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalBody,
  Button,
  Input,
  Textarea,
  Center,
  FormControl,
} from "@chakra-ui/react";

import firebase from "../firebase";
let next_error;

const ref = firebase.firestore().collection("error");

ref.onSnapshot((querySnapshot) => {
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });
  next_error = items.length + 1;
});

const ErrorForm = ({ isOpenError, onCloseError }) => {
  const [date_created, setDate_created] = useState("");
  const [comment, setComment] = useState("");
  const [error_type, setError_type] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let docData = {
      date_created,
      comment,
      error_type,
    };

    ref.doc(`error${next_error}`).set(docData);

    return onCloseError();
  }

  return (
    <Modal isOpen={isOpenError} onClose={onCloseError}>
      <ModalOverlay />
      <ModalContent alignItems="center" d="flex" flexDir="column">
        <ModalHeader>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form method="POST" onSubmit={handleSubmit}>
            <FormControl>
              <Input
                isRequired
                id="error_type"
                placeholder="Tipo de Error"
                type="text"
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                isRequired
                marginY="6px"
                type="date"
                value={date_created}
                onChange={({ target }) => setDate_created(target.value)}
              />
            </FormControl>
            <FormControl>
              <Textarea
                isRequired
                name="descripcion"
                placeholder="Descripción"
                type="text"
                value={error_type}
                onChange={({ target }) => setError_type(target.value)}
              />
            </FormControl>
            <Center>
              <Button colorScheme="blue" type="submit">
                Crear
              </Button>
            </Center>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ErrorForm;
