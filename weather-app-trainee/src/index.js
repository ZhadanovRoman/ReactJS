import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import initialState from './store/initialState';


const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
    <App />
    </Provider>
  
);


