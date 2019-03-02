import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

import '../style/App_Search.css';

class App extends React.Component {

    state = {
        artists: [],
        albums: [],
        tracks: []
    };

    onSearchSubmit = (term, type) => {
        axios.get(`http://localhost:2000/search?q=${term}&type=${type}`)
        .then(res => {
            console.log(res);
            if (res.data.artists) {
                this.setState({ artists: res.data.artists.items, albums: [], tracks: [] });
            } else if (res.data.albums) {
                this.setState({ albums: res.data.albums.items, artists: [], tracks: [] });
            } else if (res.data.tracks) {
                this.setState({ tracks: res.data.tracks.items, artists: [], albums: [] });
            }
        })
    }

    render() {
        return (
            <section className="mb-0" id="homeSection">
                <div className="ui container" id="mainForm">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className='text-center text-uppercase' style={{ padding: '20px', opacity: '1', color: '#00cc44' }}>Spotify Search Engine</h2>
                        </div>
                    </div>
                    
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <SearchList artists={this.state.artists} albums={this.state.albums} tracks={this.state.tracks} />
                </div>
            </section>
        );
    }
};

export default App;