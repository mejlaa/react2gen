import React from 'react';
import ReactDOM from 'react-dom/client';
import Composition from './components/functional/functional/Composition';
import MainButton from './components/functional/functional/MainButton';
import SearchMoch from './components/functional/functional/SearchMock';
import SimpleForm from './components/functional/functional/SimpleForm';
import Website from './components/functional/functional/Website';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
