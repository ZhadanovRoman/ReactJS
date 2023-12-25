import React from 'react';
import { Table } from './components/TableMain';
import styles from './globals.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducer } from './reducers';





function App() {
  return (
    <div className={styles.container}>
      <Table />
    </div>
    
  );
}

export default App;
