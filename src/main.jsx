import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './about/About';
import Contact from './contact/Contact';
import Home from './contact/home/Home';
import './index.css';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:   <App />,
//   },
//   {
//     path: "/about",
//     element:   <About></About>,
//   },
//   {
//     path: "/contact",
//     element:   <Contact></Contact>,
//   }
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
