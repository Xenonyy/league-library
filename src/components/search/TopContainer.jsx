import { memo } from 'react';
import { Version } from '../../enums/version';
import Search from './Search';

const TopContainerComponent = ({ onSearchChange }) => {
  return (
    <div id="top-container">
      <span id="updated">{`Last Updated: 2025/05/25 | Patch: ${Version.PATCH}`}</span>
      <h1 data-testid="league-title" className="title non-selectable">
        League Library
      </h1>
      <Search onSearchChange={onSearchChange} />
      <span id="api-disclaimer">
        Disclaimer: Loading can be slow due to the API, however this only happens once on the first visit before the
        requests are cached.
      </span>
    </div>
  );
};

const TopContainer = memo(TopContainerComponent);
export default TopContainer;
