import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import About from './components/About/About.jsx';
// import Contact from './components/About/Contact/Contact.jsx';
import Home from './components/About/Home/Home.jsx';
import Contact from './components/About/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import First from './components/About/First/First.jsx';
import Frients from './components/About/Friends/Frients.jsx';
import FriendDetail from './components/About/FriendDetail/FriendDetail.jsx';
import Posts from './components/About/Posts/Posts.jsx';
import PostDetail from './components/About/PostDetail/PostDetail.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

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
        path: 'friends',
        element: <Frients></Frients>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
          path: 'friend/:friendId',
          element: <FriendDetail></FriendDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
         path: 'post/:postId',
         element: <PostDetail></PostDetail>,
         loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
     {
      path: 'about',
      element: <About></About>
     },
     {
      path: 'contact',
      element: <Contact></Contact>
     },
     {
      path: 'app',
      element: <App></App>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
