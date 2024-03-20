import { useState } from "react";
import { useGetSimilarArtists } from "./lib/spotify-api-hooks";
import { FetchState } from './types';
import Button from 'react-bootstrap/Button';
import ArtistCard from "./components/ArtistCard";
import './Artists.css';

function Artists() {
  const [search, setSearch] = useState("");
  const [artists, fetchStateArtists, getSimilarArtists] = useGetSimilarArtists();

  return (
    <>
    <div className="searchSection">
    <div className="inputGroup">
  <label htmlFor="artist">Search for artists</label>
  <input
    id="artist"
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Artist Name"
  />
</div>
      <Button as="input" type="submit" value="Get Similar Artists" onClick={() => getSimilarArtists(search)} /> 
      </div>
      {fetchStateArtists === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateArtists === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateArtists === FetchState.SUCCESS && (
        <ul className="artistList">
          {artists.map((artist) => (
            <li key={artist.id}>
              <ArtistCard artist={artist} />
            </li>
          ))}
        </ul>
      )}
      </>
  );
}
export default Artists;