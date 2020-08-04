import React from 'react';
import BackButton from '../components/BackButton';
import BandcampText01 from '../text/BandcampText01';

const Bandcamp = () => {
    return (
        <div>
            <h1 className="h1-style">MY&nbsp;CONTENT</h1>
            <h1 className="h1-style">ON&nbsp;BANDCAMP</h1>
            <BandcampText01 />
            <BackButton pathData="/play" />
        </div>
    )
};

export default Bandcamp;