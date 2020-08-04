import React from 'react';
import { Link } from "react-router-dom";



const ContactButton = (props) => {
    console.log(props)
    const style = {
        textDecoration: "none",
        color: "#ffeead",
        fontSize: "60px"
    }

    return (
        <div>
            <Link style={style} to={props.pathData}>
                <div>CONTACT</div>
            </Link>
        </div>
    )
};

export default ContactButton;