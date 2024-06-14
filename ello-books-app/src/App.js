import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BooksProvider} from "./frontend/context/booksContext";
import {RouterProvider} from "react-router-dom";
import { router} from "./routes";



function App() {
  return (
      <BooksProvider>
          <ToastContainer />
        <RouterProvider router={router} />
      </BooksProvider>
  );
}

export default App;
