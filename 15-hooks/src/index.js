import React from 'react';
import ReactDOM from 'react-dom/client';
import UseStates01 from './hooks/01-UseState';
import UseStates02 from './hooks/02-USeState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStates01 /> */}
    <UseStates02/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
