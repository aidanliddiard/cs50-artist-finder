import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistDetail from '../components/ArtistDetail';
import ConcertList from '../components/ConcertList';
import './Detail.css';
import Button from 'react-bootstrap/Button';

function Detail() {
  const { id = '', name = '' } = useParams();

  return (
    <>
      {
        <Button href="/" variant="primary" value="Home">
          Home
        </Button>
      }
      <div className="detailPage">
        <ArtistDetail id={id} />
        <ConcertList name={name} />
      </div>
    </>
  );
}
export default Detail;
