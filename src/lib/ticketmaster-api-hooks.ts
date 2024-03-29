import axios from 'axios';
import { useState } from 'react';
import { EventData, FetchState } from '../types';

const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;

export function useGetEvents() {
  const [fetchStateEvents, setFetchStateEvents] = useState(FetchState.DEFAULT);
  const [events, setEvents] = useState<Array<EventData>>([]);

  const getEvents = async (artistName: String) => {
    try {
      setFetchStateEvents(FetchState.LOADING);

      const resp = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&apikey=${API_KEY}`
      );
      console.log('resp', resp);
      const data = resp.data._embedded.events as Array<EventData>;

      setEvents(data);
      setFetchStateEvents(FetchState.SUCCESS);
    } catch (err) {
      setFetchStateEvents(FetchState.ERROR);
    }
  };

  return [events, fetchStateEvents, getEvents] as const;
}
