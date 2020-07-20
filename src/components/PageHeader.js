import React from 'react';


const PageHeader = (props) => {

    return (
        <div className="page-header-container h1-style">
            <h1>{props.title}</h1>
            <img src={props.icon} alt="page icon" />
        </div>
    )
};

export default PageHeader;