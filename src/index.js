import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Registrazione } from './components/pRegistrazione';
import { Dimenticata } from './components/passDimenticata';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


{/*Per collegamenti*/}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pRegistrazione",
    element: <Registrazione />,
  },
  {
    path: "passDimenticata",
    element: <Dimenticata />,
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
