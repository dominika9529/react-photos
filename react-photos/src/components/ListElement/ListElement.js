import React from 'react';
import { Link } from 'react-router-dom';
import './ListElement.css';


export default ({
  data: {
    id,
    cover_photo: {
      urls: {
        thumb
      }
    },
    title
  }
}) => (
  <div className="card">
    <Link to={`/section/${id}`}>
      <div className="card__image">
        <img src={thumb} alt="" />
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
    </Link>
  </div>
);
