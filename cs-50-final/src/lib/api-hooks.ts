import { useState } from 'react';
import { FetchState } from './types';
import { EventData } from '../types';

export function useGetEvents() {
    const [FetchState, setFetchState] = useState(FetchState.DEFAULT);
    const [events, setEvents] = useState<Array<EventData>>([]);

    const getEvents = async () => {
        try {
            setFetchState(FetchState.LOADING);
        } catch(err) {
            setFetchState(FetchState.ERROR);
        }
}
}