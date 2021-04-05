import React, { useContext } from 'react';
import DataBaseContext from '../application/database-provider';


const ErrorCard = () => {

  const db = useContext(DataBaseContext);
  return (
    <h1> {db} </h1>

  );
}

export default ErrorCard;