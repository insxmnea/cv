import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to={'/home'} />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/neoflex-invite-test/cart",
    // element: <CartPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
