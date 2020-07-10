import React from 'react';
import SelectStageCard from './SelectStageCard';
import rightArrow from '../images/sito-mobile/arrow-right.png';
import leftArrow from '../images/sito-mobile/arrow-left.png';

class SelectStageArrows extends React.Component {
    constructor(props) {
        super(props);
    }
    
    changingPic = (props) => {
        console.log(props)
    }

    render() { 
        return ( 
            <div className="select-stage-arrows">
                <img 
                     className="arrow arrow-right" 
                     src={leftArrow} 
                     alt="arrow left" />
                <img 
                     className="arrow arrow-left" 
                     src={rightArrow} 
                     alt="arrow right" />
            </div>
         );
    }
}
 
export default SelectStageArrows;