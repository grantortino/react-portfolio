import React from 'react';
import BackButton from '../components/BackButton';
import SpotifyText01 from '../text/SpotifyText01';

const Spotify = () => {
    return (
        <div>
            <h1 className="h1-style">MY&nbsp;MUSIC</h1>
            <h1 className="h1-style">PROJECTS&nbsp;ON</h1>
            <h1 className="h1-style">SPOTIFY</h1>
            <SpotifyText01 />
            <BackButton pathData="/play" />
        </div>    
    )
};

export default Spotify;