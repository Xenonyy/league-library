import { Version } from '../../enums/version';
import Search from './Search';

const TopContainer = () => {
  return (
    <div id="top-container">
      <span id="updated">{`Last Updated: 2025/05/25 | Patch: ${Version.PATCH}`}</span>
      <h1 data-testid="league-title" className="title non-selectable">
        League Library
      </h1>
      <Search />
      <span id="api-disclaimer">
        Disclaimer: Sometimes the API can be slow won't return the data in time. In this case clicking on a character
        will either return no data or incorrect data.
      </span>
    </div>
  );
};

export default TopContainer;
