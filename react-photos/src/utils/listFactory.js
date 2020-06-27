import React from 'react';

export default (list, Cmp) =>
  (Array.isArray(list)
      && list.map((item, index) => <Cmp key={`col-${item.id}-${index}`} data={item} />)) || []
