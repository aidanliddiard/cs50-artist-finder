import axios from 'axios';
import { useState } from 'react';
import { EventData, FetchState } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

export function useGetEvents() {
    const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
    const [events, setEvents] = useState<Array<EventData>>([]);

    const getEvents = async () => {
        try {
            setFetchState(FetchState.LOADING);
            
            const resp = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=Noah_Kahan&apikey=${API_KEY}`);
            const data = resp.data._embedded.events as Array<EventData>;

            setEvents(data);
            setFetchState(FetchState.SUCCESS);

        } catch(err) {
            setFetchState(FetchState.ERROR);
        }
    }

    return [events, fetchState, getEvents] as const;
}