import React from 'react';
import { Link } from "react-router-dom";



const WorkSections = () => {

    const style = {
        textDecoration: "none",
    }

    return (
        <div>
            <div className="push" />
            <Link style={style} to="/work">
                <div className="back-button">BACK</div>
            </Link>
        </div>
    )
};

export default WorkSections;