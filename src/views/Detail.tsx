import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistDetail from '../components/ArtistDetail';
import ConcertList from '../components/ConcertList';
import './Detail.css';

function Detail() {
  const { id = '', name = '' } = useParams();

  return (
    <div className="detailPage">
      <ArtistDetail id={id} />
      <ConcertList name={name} />
    </div>
  );
}
export default Detail;
