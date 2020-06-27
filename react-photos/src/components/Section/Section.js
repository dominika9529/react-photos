import React from 'react';
import listFactory from '../../utils/listFactory';

import ListElement from './ListElement';

export default ({ data }) => (
    <div className="sections">
      {listFactory(data, ListElement)}
    </div>
  );
