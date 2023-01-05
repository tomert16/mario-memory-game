import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Leaderboard from './components/Leaderboard';
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
    path: "*",
    element: <div> 404 NOT FOUND</div>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
