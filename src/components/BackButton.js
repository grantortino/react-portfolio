import React from 'react';
import { Link } from "react-router-dom";



const BackButton = () => {

    const style = {
        textDecoration: "none",
    }

    return (
        <div>
            <div className="push" />
            <Link style={style} to="/home">
                <div className="back-button">BACK</div>
            </Link>
        </div>
    )
};

export default BackButton;