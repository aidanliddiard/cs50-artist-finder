import Card from 'react-bootstrap/Card';
import { ArtistData } from '../types';
import './ArtistCard.css';

interface ArtistCardProps {
  artist: ArtistData;
}

function ArtistCard({ artist }: ArtistCardProps) {
  console.log(artist);
  return (
    <Card className="artistCard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={artist.images[0].url} alt="" />
      <Card.Body>
        <Card.Title>{artist.name}</Card.Title>
      </Card.Body>
      <Card.Text>
        <p>Followers: {artist.followers.total.toString()}</p>
        {artist.genres[0] ? (
          <>
            <p id="Genres">Genres:</p>
            <ul aria-labelledby="Generes">
              {artist.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </>
        ) : null}
      </Card.Text>
    </Card>
  );
}

export default ArtistCard;
