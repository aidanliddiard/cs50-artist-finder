import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css';
import Artists from './views/Artists';
import Detail from './views/Detail';
import Footer from './components/Footer';

function Content() {
  const location = useLocation();

  return (
    <>
      <h1>Explore New Music</h1>
      {location.pathname === '/' && (
        <h4>Search for an artist's related artists to explore new music.</h4>
      )}
      <Routes>
        <Route path="/artist/:id/:name" element={<Detail />} />
        <Route path="/" element={<Artists />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Content">
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
