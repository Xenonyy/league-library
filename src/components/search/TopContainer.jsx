import React from 'react';
import Search from './Search';

class TopContainer extends React.Component {
    render() {
    return(
        <div id = "top-container">
            <span id = "updated">Last Updated: 2021/04/19</span>
            <h1 data-testid = "league-title" className = "title non-selectable">League Library</h1>
            <Search />
        </div>
        )
    }
}

export default TopContainer;