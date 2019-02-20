import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../style/Artist.css'

class Artist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artist: {},
            related_artist: []
        };

    }

    componentDidMount() {
        console.log(this.props);
        
        // To get all the API
        Promise.all([
            axios.get(`http://localhost:2000/artists/${this.props.match.params.id}`),
            axios.get(`http://localhost:2000/artists/${this.props.match.params.id}/related-artists`)
        ]).then(res => {
            console.log(res);
            const [artist, related_artists] = res;
            this.setState({ artist: artist.data, related_artist: related_artists.data.artists });
        })

        // To get separate API
        // axios.get(`http://localhost:2000/artists/${this.props.match.params.id}`)
        // .then(res => {
        //     this.setState({ artist: res.data, artistImageUrl: res.data.images[0].url });
        //     console.log(this.state.artist);
        // });

        // axios.get(`http://localhost:2000/artists/${this.props.match.params.id}/related-artists`)
        // .then(res => {
        //     this.setState({ related_artist: res.data.artists });
        //     console.log(this.state.related_artist);
        // })
    }

    render() {
        
        // const artistStyle = {
        //     backgroundImage: 'url(' + this.state.artistImageUrl + ')',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center center',
        //     opacity: '0.7'
        // }

        // populate all the related artists
        const relatedArtists = this.state.related_artist.map((item) => {
            return (
                <div className="col-lg-3 item" style={{ float: 'left' }}>
                    <Link onClick={this.forceUpdate} to={{ pathname: `/artist/${item.id}`, state: {item} }}>
                        <img src={item.images[1].url} className="relatedImg" />
                    </Link>
                    <div className="content">
                       <h3>{item.name}</h3>
                    </div>                
                </div>
            );
        })

        const genre = (this.state.artist.genres || []).map((item) => {
            return <p>{item}</p>
        })

        const artistImageURL = (this.state.artist.images || []).map((item) => {
            return item.url;
        })

        const external_url = (this.state.artist.external_urls && this.state.artist.external_urls.spotify);
            
        // const genre = this.state.genres.map((item) => {
        //     return <p>{item}</p>
        // })      
        console.log(genre);

        return(
            <section className="mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <h2 className="text-center text-uppercase" style={{ padding: '20px' }}>{this.state.artist.name}</h2>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 left">
                            <img className="profile" src={artistImageURL[0]} />
                        </div>
                        <div className="col-lg-6 right">
                            <table className="ui table">
                                <tr>
                                    <td className="collapsing">
                                        <i className="user icon"></i>Artist Name: 
                                    </td>
                                    <td>{this.state.artist.name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="music icon"></i>Genre: 
                                    </td>
                                    <td>{ genre }</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="linkify icon"></i>Spotify URL:  
                                    </td>
                                    <td>{external_url}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div style={{ 
                            padding: '50px',
                            backgroundColor: '#b3b3b3',
                            opacity: '0.6',
                            width: '100%'
                            }}>
                            <h2 style={{ opacity: '1' }}>Realted Artists</h2>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-12 aaa" style={{ display: 'block' }}>
                            { relatedArtists }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Artist;