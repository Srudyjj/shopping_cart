import React from 'react';
import { useLocation } from 'react-router-dom';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        <code>{location.pathname}</code> not found!
      </h3>
    </div>
  );
}

export default NoMatch;
