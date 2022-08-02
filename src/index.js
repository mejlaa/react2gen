import React from 'react';
import ReactDOM from 'react-dom/client';
import GetQuotes from './components/functional/functional/GetQuotes/GetQuotes';
import QuoteCard from './components/functional/functional/GetQuotes/QuoteCard';
import Quote from './components/functional/functional/Quote';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <QuoteCard content="jkdskjsdk" author="bla bla" /> */}
    <GetQuotes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
