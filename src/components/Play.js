import React from 'react'
import { Link } from "react-router-dom";

class Play extends React.Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <hr/>
                <h1>Play</h1>
            </div>)
    }
} export default Play