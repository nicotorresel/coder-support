import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack bg="purple.100" justifyContent="space-between" marginTop={50} spacing={10} width={200}>
      <Link to="/">Pagina Principal</Link>
      <Link to="/Errores">Errores</Link>
      <Link to="/TiposDeError">Tipos de Errores</Link>
    </Stack>
  );
};

export default Navbar;
