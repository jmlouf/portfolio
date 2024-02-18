import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import { About, Error, Projects, Contact, Resume } from './pages';
import './index.css';

// Define accessible routes with corresponding components and routes.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate replace to='/about' />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
