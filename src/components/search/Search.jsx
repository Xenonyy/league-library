import { useEffect, useState } from 'react';

const Search = ({ onSearchChange }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearchChange(query);
  }, [query, onSearchChange]);

  const handleReset = () => {
    setQuery('');
  };

  return (
    <div className="search-container" data-testid="search-container">
      <label className="search-label" htmlFor="search-input">
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          maxLength="15"
          spellCheck="false"
          data-testid="search-input"
        />
      </label>
      <div id="search-reset" data-testid="reset" onClick={handleReset} style={{ cursor: 'pointer' }}>
        X
      </div>
    </div>
  );
};

export default Search;
