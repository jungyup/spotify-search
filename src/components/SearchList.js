import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

import '../style/App_Search.css';

// class SearchList extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             show: false
//         }
//     }

//     handleClose() {
//         this.setState({ show: false });
//       }
    
//     handleShow() {
//         console.log(this.state);
//         this.setState({ show: true });
//     }

//     render() {

//         console.log(this.props);

//         const temp = "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_available_3.jpg";

//         const artists = (this.props.artists || []).map((artist) => {
        
//             return (<div key={artist.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
//                         {
//                             artist.images.length > 1 
//                             ? 
//                             <div className="image">
//                                 <img src={artist.images[1].url} alt="artist cover"></img>
//                             </div> 
//                             : 
//                             <div className="image">
//                                 <img src={temp} alt="not found"></img>
//                             </div>
//                         }
//                         <div className="content">
//                             <Link to={{ pathname: `/artist/${artist.id}`, state: {artist} }}>{artist.name}</Link>
                            
//                         </div>
//                     </div>);
//         });

//         const albums = (this.props.albums || []).map((album) => {
    
//             return (<div key={album.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
//                     {
//                         album.images.length > 1 
//                         ? 
//                         <div className="image">
//                             <img src={album.images[1].url} alt="album cover"></img>
//                         </div> 
//                         : 
//                         <div className="image">
//                             <img src={temp} alt="not found"></img>
//                         </div>
//                     }
//                     <div className="content">
//                         <Link to={{ pathname: `/album/${album.id}`, state: {album} }}>{album.name}</Link>
                        
//                     </div>
//                 </div>);
//         });

//         const tracks = (this.props.tracks || []).map((track) => {
//             return (<div key={track.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
//                         {/* {
//                             track.images.length > 1 
//                             ? 
//                             <div className="image">
//                                 <img src={track.images[1].url} alt="track image"></img>
//                             </div> 
//                             : 
//                             <div className="image">
//                                 <img src={temp} alt="image not found"></img>
//                             </div>
//                         } */}
//                         <div className="content">
//                             <Link to={{ pathname: `/track/${track.id}`, state: {track} }}>{track.name}</Link>
//                             <Button variant="primary" onClick={this.handleShow}>
//                                 Launch demo modal
//                             </Button>
//                             <Modal show={this.state.show} onHide={this.handleClose}>
//                                 <Modal.Header closeButton>
//                                     <Modal.Title>Modal heading</Modal.Title>
//                                 </Modal.Header>
//                                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                                 <Modal.Footer>
//                                     <Button variant="secondary" onClick={this.handleClose}>
//                                     Close
//                                     </Button>
//                                     <Button variant="primary" onClick={this.handleClose}>
//                                     Save Changes
//                                     </Button>
//                                 </Modal.Footer>
//                             </Modal>
//                         </div>
//                     </div>);
//         });

//         if (artists.length !== 0) {
//             return  (<div className="artist-list ui cards">
//                     {artists}
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                 </div>);
//         } else if (albums.length !== 0) {
//             return  (<div className="album-list ui cards">
//                     {albums}
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                 </div>);
//         } else if (tracks.length !== 0) {
//             return  (<div className="track-list ui cards">
//                     {tracks}
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                     <div className="hidden-card"></div>
//                 </div>);
//         } else {
//             return (<div className="nothing" style={{ padding: '10px' }}>
//                 <h2 className='text-center text-uppercase' style={{ padding: '20px', opacity: '1', color: '#00cc44' }}>Waiting for Search :)</h2>
//             </div>)
//         }
//     }
// }

const SearchList = props => {
    const temp = "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_available_3.jpg";
    console.log(props);
    const artists = (props.artists || []).map((artist) => {
        
            return (<div key={artist.id} className="ui card" style={{backgroundColor: `#e6ffee`}}>
                        {
                            artist.images.length > 1 
                            ? 
                            <div className="image">
                                <img src={artist.images[1].url} alt="artist cover"></img>
                            </div> 
                            : 
                            <div className="image">
                                <img src={temp} alt="not found"></img>
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
                            <img src={album.images[1].url} alt="album cover"></img>
                        </div> 
                        : 
                        <div className="image">
                            <img src={temp} alt="not found"></img>
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
                <div className="hidden-card"></div>
            </div>);
    } else if (albums.length !== 0) {
        return  (<div className="album-list ui cards">
                {albums}
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
            </div>);
    } else if (tracks.length !== 0) {
        return  (<div className="track-list ui cards">
                {tracks}
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
                <div className="hidden-card"></div>
            </div>);
    } else {
        return (<div className="nothing" style={{ padding: '10px' }}>
            <h2 className='text-center text-uppercase' style={{ padding: '20px', opacity: '1', color: '#00cc44' }}>Waiting for Search :)</h2>
        </div>)
    }
    
}

export default SearchList;

// <a className="header" href={artist.external_urls.spotify}>{artist.name}</a>