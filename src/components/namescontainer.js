import React from 'react';

class NamesContainer extends React.Component {
    render() {
        return (
            <div style = {{padding: "3em 0 0 0.5em"}}>
                {this.props.names.map(name => <Name name = {name} />)}
            </div>
        )
    }
}
class Name extends React.Component {
    render() {
        return (
            <div className = "search-result">
                {this.props.name}
            </div>
        )
    }
}

export default NamesContainer;