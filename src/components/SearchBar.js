import React from 'react';

import '../style/App_Search.css';

class SearchBar extends React.Component {

    state = {
        term: '',
        type: ''
    };

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
                                onChange={(e) => this.setState({ term: e.target.value, type: document.getElementById('types').value })}
                            />
                            {/* <button onSubmit={this.onFormSubmit} className="ui button">Search</button> */}
                        </div>
                        <div className="field">
                            <label>Filter</label>
                            <select className="ui dropdown" id="types">
                                <option className="item" value="artist">Artist</option>
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