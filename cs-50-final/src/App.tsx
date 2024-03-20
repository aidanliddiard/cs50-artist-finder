import './App.css';
// import { useGetSimilarArtists } from './lib/spotify-api-hooks';
// import { useGetEvents } from './lib/ticketmaster-api-hooks';
// import { FetchState } from './types';
import Artists from './Artists';

function App() {
//   const [events, fetchStateEvents, getEvents] = useGetEvents()
//   const [artists, fetchStateArtists, getSimilarArtists] = useGetSimilarArtists()

  return (
    <div className="App">
        <h1>Explore New Music</h1>
        <Artists />
      {/* {
        fetchStateEvents === FetchState.DEFAULT && <button onClick={getEvents}>Get Events</button>
      }
      {fetchStateEvents === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateEvents === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateEvents === FetchState.SUCCESS && (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.dates.start.localDate} at {event.dates.start.localTime}</p>
              <p>{event.url}</p>
            </li>
          ))}
        </ul>
      )} */}
     
    </div>
  );
}

export default App;

