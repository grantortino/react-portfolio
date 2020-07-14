import React from 'react';

class SelectStageCard extends React.Component {

    render() { 
        return ( 
            <div>
                <div className="select-link">
                    <img className="select-image" src={this.props.data.pic} />
                    <img className="select-button" src={this.props.data.button} />
                </div>
            </div>
        );
    }
}
 
export default SelectStageCard;