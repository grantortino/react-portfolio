import React from 'react';
import { Link } from "react-router-dom";



const BackButton = (props) => {
    console.log(props)
    const style = {
        textDecoration: "none",
    }

    return (
        <div>
            <div className="push" />
            <Link style={style} to={props.pathData}>
                <div className="back-button">BACK</div>
            </Link>
        </div>
    )
};

export default BackButton;