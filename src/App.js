import React from "react";
import { Stack } from "@chakra-ui/react";

import Routes from "./components/routes";
import Navbar from "./components/navbar";
import DataBaseContext, { db } from "./application/database-provider";
import Searchbar from "./components/search-bar";

const App = () => {
  return (
    <DataBaseContext.Provider value={db}>
      <Stack direction="row" spacing={0}>
        <Navbar />
        <Stack width="100%">
          <Searchbar />
          <Routes />
        </Stack>
      </Stack>
    </DataBaseContext.Provider>
  );
};

export default App;
