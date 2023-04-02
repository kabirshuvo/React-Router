import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './about/About';
import Users from './components/users/Users';
import Contact from './contact/Contact';
import Home from './contact/home/Home';
import First from './first/First';
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
        path: '/',
        element: <First></First>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        
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
