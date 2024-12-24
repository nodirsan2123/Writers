import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style/Main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Writers from "./pages/Writers";
import Books from './pages/Books';
import Home from './pages/Home';
import Error from './pages/Error';
import Writer from './pages/Writer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/writers" element={<Writers />} />
          <Route path="/books" element={<Books />} />
          <Route path='/writer/:id' element={<Writer />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
