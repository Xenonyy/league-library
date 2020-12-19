import React from 'react';
import NamesContainer from './namescontainer';

class SearchOldVer extends  React.Component {
    constructor(){
        super();
        this.state = { names: [], searchTerm: '' }
    }

    async componentDidMount() {
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json");
        const json = await response.json();
        let cards = [];
        Object.keys(json.data).forEach(key => {
            cards.push(json.data[key]);
        });
        let names = [];
        cards.map((data) => 
            names.push(data.name)
        )
        this.setState({names: names});
    }

    editSearch = (event) => {
        this.setState({searchTerm: event.target.value});
    }
    dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    toggleSearch = () => {
        let input, filter, list, i;
        input = document.getElementById("search-input");
        filter = input.value.toLowerCase();
        list = document.getElementsByClassName('search-result');
    
        for (i = 0; i < list.length; i++) {
            if (filter !== "") {
                list[i].style.display = "flex";
              } else {
                list[i].style.display = "none";
              }
        }
    }
	render() {
		return (
            <div className = "search-flex-container">
                <div className = "search-container">
                    {/*Search Input*/}
                    <label className = "search-label" htmlFor = "search-input">
                        <input
                            type = "text"
                            value = {this.state.searchTerm}
                            id = "search-input"
                            placeholder = "Search..."
                            onChange = {this.editSearch}
                            onKeyDown = {this.toggleSearch}
                            onKeyUp = {this.toggleSearch}
                            spellCheck = "false"
                        />
                    </label>
                    <NamesContainer names = {this.dynamicSearch()} />
                </div>
            </div>
        )
	}
}

export default SearchOldVer;