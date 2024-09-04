import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { Plants } from './plantdatabase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Card picture={Plants[0].imgFile} name={Plants[0].navn} description={Plants[0].description} family={Plants[0].family}  />
    <Card picture={Plants[1].imgFile} name={Plants[1].navn} description={Plants[1].description} family={Plants[1].family}  />
    <Card picture={Plants[2].imgFile} name={Plants[2].navn} description={Plants[2].description} family={Plants[2].family}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
