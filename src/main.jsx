import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css';
import NewPage from './index.jsx';
import Profile from './profile.jsx';
import ErrorHandle from './pages/error.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandle />,
    children: [
      {
        path: "/page",
        element: <NewPage />,
        errorElement: <ErrorHandle />
      },
    ]
  },

  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorHandle />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
