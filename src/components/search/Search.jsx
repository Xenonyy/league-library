import React from 'react';

class Search extends  React.Component {
    champSearch = () => {
        let input, filter, div, divName, noResults;
            input = document.getElementById('search-input');
            filter = input.value.toUpperCase();
            div = document.getElementsByClassName("champion-card");
            divName = document.getElementsByClassName("champion-card-name");
            noResults = document.getElementById("no-results-container");
                
        // Loop through all list items, and hide those who don't match the search query
        for (const [i] of Object.entries(div)) {
            divName[i].innerText.toUpperCase().indexOf(filter) > -1 ? div[i].style.display = "inline-grid" : div[i].style.display = "none";
        }
        // Convert to an array
        const divsArray = [].slice.call(div);
        // Find all divs that are not display none
        const displayShow = divsArray.filter((e) => getComputedStyle(e).display !== "none");
        // And use length to count # of divs
        const numberOfVisibleDivs = displayShow.length;

        if (numberOfVisibleDivs < 1) noResults.style.display = "inline-grid";
        else if (numberOfVisibleDivs > 0) noResults.style.display = "none";
    }
     // Reset search on click
     resetSearch = () => {
        document.querySelector('#search-input').value = "";
        
        const div = document.querySelectorAll(".champion-card");
        for (const [index] of Object.entries(div)) {
            div[index].style.display = "inline-grid";
        }
    }
	render() {
		return (
            <div className = "search-container" data-testid = "search-container">
                <label className = "search-label" htmlFor = "search-input">
                    <input
                        type = "text"
                        id = "search-input"
                        placeholder = "Search..."
                        onChange = {this.champSearch}
                        maxLength = "15"
                        spellCheck = "false"
                        data-testid = "search-input"
                    />
                </label>
                <div id = "search-reset" data-testid = "reset" onClick = {() => this.resetSearch()}>X</div>
            </div>
        )
	}
}

export default Search;