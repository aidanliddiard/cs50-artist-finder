import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Artists from './views/Artists';
import Detail from './views/Detail';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <div className="Content">
          <BrowserRouter>
            <h1>Explore New Music</h1>
            <Routes>
              <Route path="/artist/:id/:name" element={<Detail />} />
              <Route path="/" element={<Artists />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
