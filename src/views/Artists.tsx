import { useState } from 'react';
import { useGetSimilarArtists } from '../lib/spotify-api-hooks';
import { FetchState } from '../types';
import Button from 'react-bootstrap/Button';
import ArtistCard from '../components/ArtistCard';
import './Artists.css';

function Artists() {
  const [search, setSearch] = useState('');
  const [artists, fetchStateArtists, getSimilarArtists] =
    useGetSimilarArtists();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getSimilarArtists(search);
        }}
      >
        <div className="searchSection">
          <div className="inputGroup">
            <label htmlFor="artist">Search for artists</label>
            <div className="inputIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                fill="currentColor"
                className="bi bi-search searchIcon"
                viewBox="0 0 16 16"
                aria-label=""
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input
                id="artist"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Artist Name"
              />
            </div>
          </div>
          <Button as="input" type="submit" value="Get Similar Artists" />
        </div>
      </form>
      {fetchStateArtists === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateArtists === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateArtists === FetchState.SUCCESS && (
        <>
          <h2>Artists similar to {search}</h2>
          <h4>
            Click on an artist to see their details and upcoming concerts.
          </h4>
          <ul className="artistList">
            {artists.map((artist) => (
              <li key={artist.id}>
                <ArtistCard artist={artist} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
export default Artists;
