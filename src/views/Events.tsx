import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchState } from '../types';
import { useGetEvents } from '../lib/ticketmaster-api-hooks';
// import { useGetSimilarArtists } from '../lib/spotify-api-hooks';

function Events() {
  const { id, name } = useParams();
  console.log(id, name);
  const [events, fetchStateEvents, getEvents] = useGetEvents();
  // const [artistDetails, fetchStateArtists, getArtistDetails] =
  //   useGetSimilarArtists();

  // useEffect(() => {
  //   console.log('useEffect called');

  //   const fetchArtistDetails = async () => {
  //     if (params.id) {
  //       try {
  //         console.log('Fetching artist details');
  //         const data = await getArtistDetails(params.id);
  //         console.log('Artist details fetched', data);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };

  //   // Only fetch artist details if params.id is defined and fetchStateArtists is not FetchState.LOADING
  //   if (params.id && fetchStateArtists !== FetchState.LOADING) {
  //     fetchArtistDetails();
  //   }
  // }, [params.id, fetchStateArtists, getArtistDetails]);

  return (
    <div>
      <h2>Concerts</h2>

      {fetchStateEvents === FetchState.DEFAULT && (
        <button onClick={getEvents}>Get Events</button>
      )}
      {fetchStateEvents === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateEvents === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateEvents === FetchState.SUCCESS && (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.name}</h2>
              <p>
                {event.dates.start.localDate} at {event.dates.start.localTime}
              </p>
              <p>{event.url}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Events;
