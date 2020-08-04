import React from 'react';
import YoutubeText01 from '../text/YoutubeText01';
import BackButton from '../components/BackButton';

const Youtube = () => {
    return (
        <div>
            <h1 className="h1-style">MY&nbsp;VISUAL&nbsp;AND&nbsp;AUDIO</h1>
            <h1 className="h1-style">CONTENT&nbsp;ON&nbsp;YOUTUBE</h1>
            <YoutubeText01 />
            <BackButton pathData="/play" />
        </div>
    )
};

export default Youtube;