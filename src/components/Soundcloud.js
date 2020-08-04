import React from 'react';
import SoundcloudText01 from '../text/SoundcloudText01';
import BackButton from '../components/BackButton';

class Soundcloud extends React.Component {
    render() {
    return (
        <div>
            <h1 className="h1-style">MY&nbsp;SOUNDCLOUD</h1>
            <h1 className="h1-style">PROFILE</h1>
            <SoundcloudText01 />
            <BackButton pathData="/play" />
        </div>
    )
    }
};

export default Soundcloud;