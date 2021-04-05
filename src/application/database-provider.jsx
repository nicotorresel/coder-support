import React, {createContext } from 'react';
import Loki from 'lokijs';

export const db = new Loki('example.db');

const DataBaseContext = createContext(db);

export default DataBaseContext;
