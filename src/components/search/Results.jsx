import React from 'react';

class Results extends React.Component {
    render() {
    return(
        <div id = "no-results-container">
			<div id = "no-results">
                <span id = "result-text">No results found. :(</span>
            </div>
		</div>
        )
    }
}

export default Results;