import React from 'react';
import rightArrow from '../images/sito-mobile/arrow-right.png';
import leftArrow from '../images/sito-mobile/arrow-left.png';

class SelectStageArrows extends React.Component {

    goRight = () => {
        this.props.goRightCallback()
    };

    goLeft = () => {
        this.props.goLeftCallback()
    };

    render() { 
        return ( 
            <div className="select-stage-arrows">
                <img onClick={this.goLeft}
                     className="arrow arrow-right" 
                     src={leftArrow} 
                     alt="arrow left" />
                <img onClick={this.goRight}
                     className="arrow arrow-left" 
                     src={rightArrow} 
                     alt="arrow right" />
            </div>
         );
    }
}
 
export default SelectStageArrows;