import React from 'react'
// import { Link } from "react-router-dom";
import workHead from '../images/work_head.png';
import BackButton from '../components/BackButton';
import PageHeader from '../components/PageHeader';
import WorkText01 from '../text/WorkText01';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class Work extends React.Component {



    render() {

        const style = {
        textDecoration: "none",
        }

        return (
            <div className="page-content">
                <PageHeader title="WORK" icon={workHead} />
                    <h1 className="section-header">HOW&nbsp;CAN&nbsp;I&nbsp;HELP&nbsp;YOU?</h1>
                    <WorkText01 />
                    <div className="work-button-container">
                        <Link style={style} to="/tech">
                            <Button text="TECH" />
                        </Link>
                        <Link style={style} to="/visuals">
                            <Button text="VISUALS" />
                        </Link>
                        <Link style={style} to="/language">
                            <Button text="LANGUAGE" />
                        </Link>
                    </div>
                <BackButton />
            </div>)
    }
};  

export default Work;