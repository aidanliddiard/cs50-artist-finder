import React, { useEffect } from 'react';
import { FetchState } from '../types';
import { useGetEvents } from '../lib/ticketmaster-api-hooks';

interface ConcertProps {
  name: string;
}
function ConcertList({ name }: ConcertProps) {
  const [events, fetchStateEvents, getEvents] = useGetEvents();

  useEffect(() => {
    getEvents(name ?? '');
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div>
      <h1>Concert List</h1>
      {fetchStateEvents === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateEvents === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateEvents === FetchState.SUCCESS && (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <h3>{event._embedded.venues[0].city.name}</h3>
              <h4>{event._embedded.venues[0].name}</h4>
              <p>
                {new Date(event.dates.start.localDate).toLocaleDateString(
                  'en-US',
                  options
                )}{' '}
                at {event.dates.start.localTime}
              </p>
              <a href={event.url}>Link to Ticketmaster</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ConcertList;
