import React from 'react';

class Search extends  React.Component {

    champSearch = () => {
        let input, filter, div, divName, i, txtValue, noResults, champCont;
            input = document.getElementById('search-input');
            filter = input.value.toUpperCase();
            div = document.getElementsByClassName("champion-card");
            divName = document.getElementsByClassName("champion-card-name");
            noResults = document.getElementById("no-results-container");
            champCont = document.getElementsByClassName("champion-container")[0];
                
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < div.length; i++) {
            txtValue = divName[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        }
        if (champCont.clientHeight < 90) {
            noResults.style.display = "flex";
        }
        if (champCont.clientHeight > 570) {
            noResults.style.display = "none";
        }
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
                        spellCheck = "false"
                    />
                </label>
            </div>
        )
	}
}

export default Search;