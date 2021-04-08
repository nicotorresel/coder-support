import React, { useContext } from "react";

import DataBaseContext from "../application/database-provider";

const ErrorCard = () => {
  const data = useContext(DataBaseContext);

  return <div> {JSON.stringify(data)}</div>;
};

export default ErrorCard;
