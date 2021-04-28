import React from "react";
import { Stack, Input, Button } from "@chakra-ui/react";

const Searchbar = () => {
  return (
    <Stack alignItems="center" direction="row" justifyContent="center">
      <Input m="6px" placeholder="Buscar Error" w="30%" />
      <Button>Buscar</Button>
    </Stack>
  );
};

export default Searchbar;
