import React, { useEffect, useState } from "react";
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

const ErrorTypeForm = ({ isOpen, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let docData = {
      descripcion,
      fecha,
      titulo,
    };

    ref.doc(`error${next_error}`).set(docData);

    return onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignItems="center" d="flex" flexDir="column">
        <ModalHeader>Tipo de Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form method="POST" onSubmit={handleSubmit}>
            <FormControl>
              <Input
                isRequired
                id="titulo"
                placeholder="Titulo"
                type="text"
                value={titulo}
                onChange={({ target }) => setTitulo(target.value)}
              />
            </FormControl>
            <FormControl>
              <Input
                isRequired
                marginY="6px"
                type="date"
                value={fecha}
                onChange={({ target }) => setFecha(target.value)}
              />
            </FormControl>
            <FormControl>
              <Textarea
                isRequired
                name="descripcion"
                placeholder="Descripción"
                type="text"
                value={descripcion}
                onChange={({ target }) => setDescripcion(target.value)}
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

export default ErrorTypeForm;
