import React from 'react';
import { Link } from "react-router-dom";


class SelectStageCard extends React.Component {

    render() {
        return (
            <div>
                <Link to={this.props.data.link}>
                    <div className="select-link" >
                        <img className="select-image" src={this.props.data.pic} />
                        <img className="select-button" src={this.props.data.button} />
                    </div>
                </Link>
            </div>
        );
    }
}

export default SelectStageCard;