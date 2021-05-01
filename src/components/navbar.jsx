import { Stack, Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      _hover={{ left: "0", transition: ".5s" }}
      bg="purple.100"
      height="100vh"
      left="-170px"
      position="absolute"
      width={200}
    >
      <Box height={15} />
      <Link to="/">
        <Box _hover={{ background: "purple.200" }} pl={4} py={2}>
          Pagina Principal
        </Box>
      </Link>
      <Link to="/errores">
        <Box _hover={{ background: "purple.200" }} pl={4} py={2}>
          Errores
        </Box>
      </Link>
      <Link to="/tiposDeError">
        <Box _hover={{ background: "purple.200" }} pl={4} py={2}>
          Tipos de Error
        </Box>
      </Link>
      <Button bottom={2} left={12} position="absolute" onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  );
};

export default Navbar;
