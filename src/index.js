import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './components/State';
import CONDITIONAL_RENDARING from './Conditional_Rendering';
import EVENT_HANDLER from './EVENT_HANDLER_CLASS/EVENT_HANDLER';
import STATE_HOOK from './STATE_HOOK/index'
import Form from './components/FORM/Form';
import Faqs from './FAQS/Faqs';
import UseEffect from './Hooks/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
