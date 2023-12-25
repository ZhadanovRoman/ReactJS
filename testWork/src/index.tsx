
import ReactDOM from 'react-dom/client';
import './globals.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducer } from './reducers';



const root = ReactDOM.createRoot(
 
  document.getElementById('root') as HTMLElement
  
); const store = createStore(combineReducer)
root.render(
  <Provider store={store}>

<App/>
</Provider> 
 
);


