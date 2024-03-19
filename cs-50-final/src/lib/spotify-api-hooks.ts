import axios from 'axios';
import qs from 'qs';
import { useState } from 'react';
import { FetchState } from '../types';
import { ArtistData } from '../types';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = btoa(`${client_id}:${client_secret}`);

export function useGetSimilarArtists() {
    const [fetchStateArtists, setFetchStateArtists] = useState(FetchState.DEFAULT);
    const [artists, setArtists] = useState<Array<ArtistData>>([]);

    const getAccessToken = async () => {
        const data = qs.stringify({
            'grant_type': 'client_credentials'
        });
    
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', 
                data,
                { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${auth_token}`,
                    }
                }
            );
    
            return response.data.access_token;
        } catch(err) {
            console.log(err);
        }   
    }

    const getArtistId = async () => {
        try {
            const accessToken = await getAccessToken();
            const resp = await axios.get(`https://api.spotify.com/v1/search?q=Noah+Kahan&type=artist`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            console.log('hello', resp);
            const data = resp.data.artists.items[0].id;

            return data;
        } catch(err) {
            console.log(err);
        }
    }

    const getSimilarArtists = async () => {
        try {
            setFetchStateArtists(FetchState.LOADING);
            
            const accessToken = await getAccessToken();
            const artistId = await getArtistId();
            const resp = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            const data = resp.data.artists as Array<ArtistData>;

            setArtists(data);
            setFetchStateArtists(FetchState.SUCCESS);

        } catch(err) {
            setFetchStateArtists(FetchState.ERROR);
        }
    }

    return [artists, fetchStateArtists, getSimilarArtists] as const;
}