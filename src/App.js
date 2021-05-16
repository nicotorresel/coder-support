import React from "react";
import { Stack } from "@chakra-ui/react";

import Routes from "./components/routes";
import Navbar from "./components/navbar";
import Searchbar from "./components/search-bar";

const App = () => {
  return (
    <Stack direction="row" spacing={0}>
      <Navbar />
      <Stack width="100%">
        <Searchbar />
        <Routes />
      </Stack>
    </Stack>
  );
};

export default App;
