import './App.css';
import { useGetEvents } from './lib/api-hooks';
import { FetchState } from './types';

function App() {
  const [events, fetchState, getEvents] = useGetEvents()

  return (
    <div className="App">
      {
        fetchState === FetchState.DEFAULT && <button onClick={getEvents}>Get Events</button>
      }
      {fetchState === FetchState.LOADING && <p>Loading...</p>}
      {fetchState === FetchState.ERROR && <p>There was an error</p>}
      {fetchState === FetchState.SUCCESS && (
        console.log(events),
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.dates.start.localDate} at {event.dates.start.localTime}</p>
              <p>{event.url}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
