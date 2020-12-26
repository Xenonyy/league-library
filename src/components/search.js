import React from 'react';

class Search extends  React.Component {

    champSearch = () => {
        let input, filter, div, divName, i, txtValue, noResults, reset;
            input = document.getElementById('search-input');
            filter = input.value.toUpperCase();
            div = document.getElementsByClassName("champion-card");
            divName = document.getElementsByClassName("champion-card-name");
            noResults = document.getElementById("no-results-container");
            // champCont = document.getElementsByClassName("champion-container")[0];
            reset = document.getElementById("search-reset");
                
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < div.length; i++) {
            txtValue = divName[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "flex";
            } else {
                div[i].style.display = "none";
            }
        }
        // Convert to an array
        var divsArray = [].slice.call(div);
        // Find all divs with display none
        // var displayNone = divsArray.filter(function(e) {
        //     return getComputedStyle(e).display === "none"
        // });
        // And all divs that are not display none
        var displayShow = divsArray.filter(function(e) {
            return getComputedStyle(e).display !== "none"
        });
        // And use length to count # of divs
        // var numberOfHiddenDivs = displayNone.length;
        var numberOfVisibleDivs = displayShow.length;
        // console.log("hidden: " + numberOfHiddenDivs + ", visible: " +numberOfVisibleDivs);

        if (numberOfVisibleDivs < 1) {
            noResults.style.display = "flex";
        } else if (numberOfVisibleDivs > 0) {
            noResults.style.display = "none";
        }

        reset.addEventListener("click", () => {
            input.value = "";
            for (let i = 0; i < div.length; i++) {
                div[i].style.display = "flex";
                
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