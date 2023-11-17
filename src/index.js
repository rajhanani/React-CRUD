import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom"
import contactreducer from './redux/reducers/indexreducer';
import {createStore} from 'redux' 

import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
const store= createStore(contactreducer,composeWithDevTools())

root.render(
  <Provider store={store}>
   <BrowserRouter> 

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
