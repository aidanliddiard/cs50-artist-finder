import { useState } from "react";
import { useGetSimilarArtists } from "./lib/spotify-api-hooks";
import { FetchState } from './types';
import Button from 'react-bootstrap/Button';

function Artists() {
  const [search, setSearch] = useState("");
  const [artists, fetchStateArtists, getSimilarArtists] = useGetSimilarArtists();

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for artists"
      />  <Button as="input" type="submit" value="Get Similar Artists" onClick={() => getSimilarArtists(search)} /> 
      {fetchStateArtists === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateArtists === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateArtists === FetchState.SUCCESS && (
          <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              <h2>{artist.name}</h2>
              <p>{artist.genres}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Artists;