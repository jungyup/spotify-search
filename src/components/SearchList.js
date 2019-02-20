import React from 'react';
import { Link } from 'react-router-dom';

import '../style/App_Search.css';

const SearchList = props => {
    const temp = "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_available_3.jpg";
    console.log(props);
    const artists = (props.artists || []).map((artist) => {
        
            return (<div key={artist.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
                        {
                            artist.images.length > 1 
                            ? 
                            <div className="image">
                                <img src={artist.images[1].url} alt="artist image"></img>
                            </div> 
                            : 
                            <div className="image">
                                <img src={temp} alt="image not found"></img>
                            </div>
                        }
                        <div className="content">
                            <Link to={{ pathname: `/artist/${artist.id}`, state: {artist} }}>{artist.name}</Link>
                            
                        </div>
                    </div>);
    });

    const albums = (props.albums || []).map((album) => {
    
        return (<div key={album.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
                    {
                        album.images.length > 1 
                        ? 
                        <div className="image">
                            <img src={album.images[1].url} alt="album image"></img>
                        </div> 
                        : 
                        <div className="image">
                            <img src={temp} alt="image not found"></img>
                        </div>
                    }
                    <div className="content">
                        <Link to={{ pathname: `/album/${album.id}`, state: {album} }}>{album.name}</Link>
                        
                    </div>
                </div>);
    });

    const tracks = (props.tracks || []).map((track) => {
    
        return (<div key={track.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
                    {/* {
                        track.images.length > 1 
                        ? 
                        <div className="image">
                            <img src={track.images[1].url} alt="track image"></img>
                        </div> 
                        : 
                        <div className="image">
                            <img src={temp} alt="image not found"></img>
                        </div>
                    } */}
                    <div className="content">
                        <Link to={{ pathname: `/track/${track.id}`, state: {track} }}>{track.name}</Link>
                        
                    </div>
                </div>);
    });

    if (artists.length !== 0) {
        return  (<div className="artist-list ui cards">
                {artists}
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
            </div>);
    } else if (albums.length !== 0) {
        return  (<div className="album-list ui cards">
                {albums}
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
            </div>);
    } else if (tracks.length !== 0) {
        return  (<div className="track-list ui cards">
                {tracks}
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
            </div>);
    } else {
        return (<div className="nothing" style={{ padding: '10px' }}>
            <h2>Waiting for Search :)</h2>
        </div>)
    }
    
}

export default SearchList;

// <a className="header" href={artist.external_urls.spotify}>{artist.name}</a>