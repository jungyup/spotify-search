import React from 'react';

import '../style/App_Search.css';

const ARTIST = "artist";

class SearchBar extends React.Component {

    state = {
        term: '',
        type: ARTIST
    };

    // enum

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
        this.props.onSubmit(this.state.term, this.state.type);
    }

    handleChange(event) {
        this.setState({ type: event.target.value });
    }

    render() {  
        // let typeOption = document.getElementById('type');
        // let typeValue = typeOption.options[typeOption.selectedIndex].value;
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="container">
                        <div className="field">
                            <label>Music Search</label>
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}
                            />
                            {/* <button onSubmit={this.onFormSubmit} className="ui button">Search</button> */}
                        </div>
                        <div className="field">
                            <label>Filter</label>
                            <select className="ui dropdown" onChange={(e) => this.setState({ type: e.target.value })}>
                                <option className="item" value={ARTIST}>Artist</option>
                                <option className="item" value="album">Album</option>
                                <option className="item" value="track">Track</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;