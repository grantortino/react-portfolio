import React from 'react';
import BackButton from './BackButton';
import VisualsText01 from '../text/VisualsText01';
import bergi from '../images/ig-img/bergi_borchie_sudore_ombre.png';
import edo from '../images/ig-img/edo_capo_simplified.png';
import marghe from '../images/ig-img/marghe.png';
import richi from '../images/ig-img/richi_birra.jpeg';

function Visuals() {
    return (
        <div>
            <h1 className="h1-style">VISUALS</h1>
            <VisualsText01 />
            <div className="ig-pics">
                <img src={bergi} alt="berghain horse" />
                <img src={edo} alt="edoardo portrait" />
                <img src={marghe} alt="margherita portrait" />
                <img src={richi} alt="riccardo portrait" />
            </div>
            <BackButton pathData="/work" />
        </div>
    )
};

export default Visuals;