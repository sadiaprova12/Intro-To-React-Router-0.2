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
