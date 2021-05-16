import React, { useContext, useState } from "react";
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

const ErrorTypeForm = ({ isOpen, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // errorTypeCollection.insert({
    //   date_created: fecha,
    //   title: titulo,
    //   description: descripcion,
    //   posible_workarounds: [
    //     { date_created: "12-6-21", description: "desde el boton menu de los 3 puntitos...." },
    //   ],
    // });

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
