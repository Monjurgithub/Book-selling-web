import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compoment/Home';
import About from './compoment/About';
import Books from './compoment/Books';
import BookDetails from './compoment/BookDetails/BookDetails';
import ErrorPage from './compoment/Error/ErrorPage';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path: 'books',
        element : <Books></Books>,
        loader: ()=>fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element : <BookDetails></BookDetails>,
        loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`),

      },
      {
        path: 'about',
        element : <About></About>
      },
    ]
  },
  {
    path: '/about',
    element: <p>about page</p>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}></RouterProvider>
)
