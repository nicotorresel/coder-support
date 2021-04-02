import React, {createContext, useState} from 'react';
import Loki from 'lokijs';

const AppContext = createContext();

const MyProvider = props => {

  let db = new Loki('example.db');
  const [database, setDatabase] = useState({ db });
  
  return (
    <div>
      <AppContext.Provider value={[database, setDatabase]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default MyProvider;
