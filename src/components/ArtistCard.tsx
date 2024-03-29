import Card from 'react-bootstrap/Card';
import { ArtistData } from '../types';
import './ArtistCard.css';
import { Link } from 'react-router-dom';

interface ArtistCardProps {
  artist: ArtistData;
}

function ArtistCard({ artist }: ArtistCardProps) {
  console.log(artist);
  return (
    <Link to={`/artist/${artist.id}/${artist.name}`} className="linkStyle">
      <Card className="artistCard" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          className="artistImage"
          src={artist.images[0].url}
          alt=""
        />
        <Card.Body>
          <Card.Title>{artist.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ArtistCard;
