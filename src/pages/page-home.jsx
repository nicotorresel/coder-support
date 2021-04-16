import React, { useContext } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";

import ErrorCard from "../components/error-card";
import ErrorTypeModalInput from "../components/error-type-modal-input";
import DataBaseContext from "../application/database-provider";

const PageHome = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const data = useContext(DataBaseContext);

  return (
    <box>
      <box>
        <Button onClick={onOpen}>Cargar tipo de Error</Button>
        <ErrorTypeModalInput isOpen={isOpen} onClose={onClose} />
      </box>
      <box>
        {data.map((key, error) => {
          return <ErrorCard key={error} content={error} />;
        })}
      </box>
    </box>
  );
};

export default PageHome;
