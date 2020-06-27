import React from 'react';

export default ({ data }) => data
  ? (
    <div>
      <div>
        <img
          src={data.urls.regular}
          width="500"
          alt={data.alt_description || ''}
        />
      </div>
      <div>
        Likes: {data.likes}
        | Views: {data.views}
        | Downloads: { data.downloads}
      </div>
    </div>
  )
  : null
