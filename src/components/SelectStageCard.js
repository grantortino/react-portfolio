import React from 'react';
import face from '../images/select-mobile/know_head.png';
import button from '../images/select-mobile/know.png';

class SelectStageCard extends React.Component {
    render() { 
        return ( 
            <div>
                <a className="select-link" href="some/link1.html">
                    <img className="select-image" src={face} />
                    <img className="select-button" src={button} />
                </a>
            </div>
        );
    }
}
 
export default SelectStageCard;