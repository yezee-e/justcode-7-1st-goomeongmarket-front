<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Router from './pages/Router';
import './styles/reset.scss';
import './styles/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
=======
import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./pages/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
>>>>>>> 69aa1b7a0983c37e3394c90f210c5a27cc5aca73
