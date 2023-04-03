import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './about/About';
import PostDetails from './components/postDetails/PostDetails';
import Posts from './components/posts/Posts';
import UserDetail from './components/userDtail/UserDetail';
import Users from './components/users/Users';
import Contact from './contact/Contact';

import First from './first/First';
import Home from './home/Home';
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
        path: 'posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        
      },
      {
        path: 'user/:userId',
        element: <UserDetail></UserDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>444444444444000040400000444444</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
)
