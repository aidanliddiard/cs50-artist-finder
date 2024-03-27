import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
// import { useGetSimilarArtists } from './lib/spotify-api-hooks';
// import { useGetEvents } from './lib/ticketmaster-api-hooks';
// import { FetchState } from './types';
import Artists from './views/Artists';
import Events from './views/Events';

function App() {
  //   const [events, fetchStateEvents, getEvents] = useGetEvents()
  //   const [artists, fetchStateArtists, getSimilarArtists] = useGetSimilarArtists()

  return (
    <>
      <BrowserRouter>
        <h1>Explore New Music</h1>
        <Routes>
          <Route path="/artist/:id/:name" element={<Events />} />
          <Route path="/" element={<Artists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
