import React from 'react';

class Search extends  React.Component {
    champSearch = () => {
        let input, filter, div, divName, noResults, reset;
            input = document.getElementById('search-input');
            filter = input.value.toUpperCase();
            div = document.getElementsByClassName("champion-card");
            divName = document.getElementsByClassName("champion-card-name");
            noResults = document.getElementById("no-results-container");
            reset = document.getElementById("search-reset");
                
        // Loop through all list items, and hide those who don't match the search query
        for (const [i] of Object.entries(div)) {
            divName[i].innerText.toUpperCase().indexOf(filter) > -1 ? div[i].style.display = "flex" : div[i].style.display = "none";
        }
        // Convert to an array
        const divsArray = [].slice.call(div);
        // Find all divs that are not display none
        const displayShow = divsArray.filter((e) => getComputedStyle(e).display !== "none");
        // And use length to count # of divs
        const numberOfVisibleDivs = displayShow.length;

        if (numberOfVisibleDivs < 1) noResults.style.display = "flex";
        else if (numberOfVisibleDivs > 0) noResults.style.display = "none";
        
        // Reset search on click
        reset.addEventListener("click", () => {
            input.value = "";
            for (const [index] of Object.entries(div)) {
                div[index].style.display = "flex";
            }
        })
    }
	render() {
		return (
            <div className = "search-container">
                <label className = "search-label" htmlFor = "search-input">
                    <input
                        type = "text"
                        id = "search-input"
                        placeholder = "Search..."
                        onChange = {this.champSearch}
                        maxLength = "15"
                        spellCheck = "false"
                    />
                </label>
                <div id = "search-reset">X</div>
            </div>
        )
	}
}

export default Search;