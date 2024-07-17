import React from 'react';
import { Version } from '../../enums/version';
import Search from './Search';

const TopContainer = () => {
  return (
    <div id="top-container">
      <span id="updated">{`Last Updated: 2022/01/23 | Patch: ${Version.PATCH}`}</span>
      <h1 data-testid="league-title" className="title non-selectable">
        League Library
      </h1>
      <Search />
    </div>
  );
};

export default TopContainer;
