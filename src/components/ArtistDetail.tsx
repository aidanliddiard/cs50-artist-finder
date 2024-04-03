import { useEffect } from 'react';
import { FetchState } from '../types';
import { useGetSimilarArtists } from '../lib/spotify-api-hooks';
import Card from 'react-bootstrap/Card';

interface ArtistDetailProps {
  id: string;
}

function ArtistDetail({ id }: ArtistDetailProps) {
  const [, fetchStateArtists, , artistDetails, getArtistDetails] =
    useGetSimilarArtists();

  useEffect(() => {
    getArtistDetails(id);
  }, []);

  console.log('artistDetails', artistDetails);
  return (
    <div>
      {fetchStateArtists === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateArtists === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateArtists === FetchState.SUCCESS && artistDetails && (
        <Card className="artistCard" style={{ width: '30rem' }}>
          <Card.Img variant="top" src={artistDetails.images[0].url} alt="" />
          <Card.Body>
            <Card.Title>{artistDetails.name}</Card.Title>
          </Card.Body>
          <Card.Text>
            <p>Followers: {artistDetails.followers.total.toString()}</p>
            {artistDetails.genres[0] ? (
              <>
                <p id="Genres">Genres:</p>
                <ul aria-labelledby="Genres">
                  {artistDetails.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
                <a
                  href={artistDetails.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen on Spotify
                </a>
              </>
            ) : null}
          </Card.Text>
        </Card>
      )}
    </div>
  );
}

export default ArtistDetail;
