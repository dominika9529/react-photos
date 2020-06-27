import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  data: {
    id,
    urls: {
      thumb
    },
    description
  }
}) => (
  <div className="card">
    <Link to={`/photo/${id}`}>
      <div className="card__image">
        <img src={thumb} alt="" />
      </div>
      <div className="card__title">
        <h3>{description}</h3>
      </div>
    </Link>
  </div>
);
