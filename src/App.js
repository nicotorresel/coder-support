import './App.css';
import React from 'react';
import ErrorCard from './components/error-card';
import DataBaseContext, { db } from './application/database-provider';

const App = () => {
  return (
    <DataBaseContext value={db}>
      <ErrorCard />
    </DataBaseContext>
  );
}

export default App;
