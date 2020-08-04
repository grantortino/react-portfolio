import React from 'react'
import PageHeader from './PageHeader';
import playHead from '../images/select-mobile/play_head.png';
import BackButton from './BackButton';
import PlayText01 from '../text/PlayText01';
import bandcamp from '../images/logos/bandcamp-logo.png';
import soundcloud from '../images/logos/soundcloud-logo.png';
import spotify from '../images/logos/spotify-logo.png';
import youtube from '../images/logos/youtube-logo.png';
import { Link } from 'react-router-dom';

class Play extends React.Component {
    
    render() {

        const style = {
            textDecoration: "none",
            }
        
        return (   
        <div className="page-content">
            <PageHeader title="PLAY" icon={playHead} />
            <h1 className="section-header h1-style">HOW&nbsp;CAN&nbsp;I</h1>
            <h1 className="section-header h1-style">ENTERTAIN&nbsp;YOU?</h1>
            <PlayText01 />
            <div className="tech-icon-container">
                <Link style={style} to="/soundcloud">
                    <img src={soundcloud} alt="soundcloud logo" />
                </Link>
                    <h1 className="h1-style">SOUNDCLOUD</h1>
                <div className="push-half"></div>
                <Link to="/spotify">
                    <img src={spotify} alt="spotify logo" />
                </Link>
                <h1 className="h1-style">SPOTIFY</h1>
                <div className="push-half"></div>
                <Link to="/youtube">
                    <img src={youtube} alt="youtube logo" />
                </Link>
                <h1 className="h1-style">YOUTUBE</h1>
                <div className="push-half"></div>
                <Link to="/bandcamp">
                    <img src={bandcamp} alt="bancamp logo" />
                </Link>
                <h1 className="h1-style">BANDCAMP</h1>
            </div>
            <BackButton pathData="/home" />
        </div>
        )
    }
} export default Play