import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Leaderboard from './components/Leaderboard';
import NewCardForm from './components/NewCardForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />
  },
  {
    path: "/new-card",
    element: <NewCardForm />
  },
  {
    path: "*",
    element: <h1 style={{fontSize:"10pc"}}>Sucks You Can't Play  ¯\_(ツ)_/¯</h1>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
