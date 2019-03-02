import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Album extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            album: {},
            tracks: []
        };
    }

    componentDidMount() {
        console.log(this.props);

        axios.get(`http://localhost:2000/albums/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data);
            this.setState({ album: res.data, tracks: res.data.tracks.items });
        });
    }

    render() {

        function msToMS(ms) {
            let minutes = Math.floor(ms / 60000);
            let seconds = ((ms % 60000) / 1000).toFixed(0);

            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        //if (this.state.album === {}) return null;

        console.log(this.state.album, this.state.tracks);
        const artist = (this.state.album.artists || []).map((item, i) => {
            
            if (this.state.album.artists.length === i + 1) {
                return item.name
            } else {
                return item.name + ', '
            }
        });

        const albumImageURL = (this.state.album.images || []).map((item) => {
            return item.url;
        })

        const external_url = (this.state.album.external_urls && this.state.album.external_urls.spotify);

        const trackLists = this.state.tracks.map((item) => {
            return (
                    <tbody>
                        <tr>
                            <td data-label="Number">{item.track_number}</td>
                            <td data-label="Name">{item.name}</td>
                            <td data-label="Duration">{msToMS(`${item.duration_ms}`)}</td>
                        </tr>
                    </tbody>
            );
        });

        return (
            <section className="mb-0">
            <div className="container">
                    <div className="row contents">
                        <div className="col-lg-12">
                            <h2 className="text-center text-uppercase" style={{ padding: '20px' }}>{this.state.album.name} by {artist}</h2>
                        </div>
                    </div>
                    <div className="row" style={{ backgroundColor: 'white' }}>
                        <div className="col-lg-5 left" style={{ margin: 'auto', textAlign: 'center' }}>
                            <img className="profile" alt="album cover" src={albumImageURL[1]} />
                        </div>
                        <div className="col-lg-7 right" style={{ margin: 'auto', textAlign: 'center' }}>
                            <table className="ui table">
                                <tbody>
                                <tr>
                                    <td>
                                        <i className="music icon"></i>Album Name : 
                                    </td>
                                    <td>{this.state.album.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="user icon"></i>Artist Name : 
                                    </td>
                                    <td>{ artist }</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="calendar alternate icon"></i>Release-Date :  
                                    </td>
                                    <td>{this.state.album.release_date}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="calendar alternate icon"></i>Ablum Type :  
                                    </td>
                                    <td className="text-uppercase">{this.state.album.album_type}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="linkify icon"></i>Spotify URL :  
                                    </td>
                                    <td><a href={external_url}>{external_url}</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row track-header">
                        <div className="col-lg-12">
                            <h2 className="text-center text-uppercase" style={{ padding: '20px' }}>Track Lists</h2>
                        </div>
                    </div>
                    <div className="row" style={{ backgroundColor: 'white' }}>
                        <div className="col-lg-10" style={{ margin: 'auto', textAlign: 'center' }}>
                            <table className="ui table">
                                <thead>
                                    <tr>
                                        <th>Track Number</th>
                                        <th>Track Name</th>
                                        <th>Track Duration</th>
                                    </tr>
                                </thead>
                                {trackLists}
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );  
    }
}

export default Album;