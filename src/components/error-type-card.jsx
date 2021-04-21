import React from "react";
import { Box, Center } from "@chakra-ui/react";

const ErrorTypeCard = ({ content }) => {
  const { title, date_created, description, ...posible_workourounds } = content;

  debugger;

  return (
    <Center>
      <Box
        bg="gray.200"
        boxShadow="sm"
        d="flex"
        justifyContent="space-between"
        m="10px"
        p="6"
        rounded="md"
        width="80%"
      >
        <Box>Titulo: {title}</Box>
        <Box>Fecha creacion: {date_created}</Box>
        <Box>Descripción: {description}</Box>
        <p>Cantidad de Veces: {}</p>
      </Box>
    </Center>
  );
};

export default ErrorTypeCard;
