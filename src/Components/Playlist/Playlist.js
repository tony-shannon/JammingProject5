import React from 'react';
import TrackList from '../Tracklist/Tracklist.js';
import './Playlist.css';


class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange= this.handleNameChange.bind(this);
  }

  render () {
    return (
      <div className="Playlist" >
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }
}

export default Playlist;
