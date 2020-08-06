import React from 'react';
import TechText01 from '../text/TechText01';
import html5 from '../images/logos/html5-logo.png';
import css3 from '../images/logos/css3-logo.png';
import grid from '../images/logos/grid-logo.png';
import flex from '../images/logos/flexbox-logo.png';
import bootstrap from '../images/logos/bootstrap-logo.png';
import sass from '../images/logos/sass-logo.png';
import jslogo from '../images/logos/js-logo.png';
import hblogo from '../images/logos/handlebars-logo.png';
import jqlogo from '../images/logos/jquery-logo.png';
import jsonlogo from '../images/logos/json-logo.png';
import rctlogo from '../images/logos/react-logo.png';
import reduxlogo from '../images/logos/redux-logo.png';
import BackButton from './BackButton';

const Tech = () => {

    return (
        
        <div>
            <h1 className="h1-style">TECH</h1>
            <TechText01 />
            <p className="h1-style">STRUCTURE</p>
            <div className="tech-icon-container">
                <img src={html5} alt="html5 logo" />
                <p>HTML5</p>
                <img src={css3} alt="css logo" />
                <p>CSS3</p>
                <img src={grid} alt="grid logo" />
                <p>GRID</p>
                <img src={flex} alt="flex logo" />
                <p>FLEX</p>
                <img src={bootstrap} alt="bootstrap logo" />
                <p>BOOTSTRAP</p>
                <img src={sass} alt="sass logo" />
                <p>SASS</p>
            </div>
            <p className="h1-style">FRAMEWORKS</p>
            <p className="h1-style">AND</p>
            <p className="h1-style">LIBRARIES</p>
            <div className="tech-icon-container">
                <img src={jslogo} alt="javascript logo" />
                <p>JAVASCRIPT</p>
                <img src={rctlogo} alt="react logo" />
                <p>REACT</p>
                <img src={reduxlogo} alt="redux logo" />
                <p>REDUX</p>
                <img src={hblogo} alt="handlebars logo" />
                <p>HANDLEBARS</p>
                <img src={jqlogo} alt="jquery logo" />
                <p>JQUERY</p>
                <img src={jsonlogo} alt="JSON logo" />
                <p>JSON</p>
            </div>
            <BackButton pathData="/work" />
        </div>
    )
}
 
export default Tech;