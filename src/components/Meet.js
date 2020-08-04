import React from 'react';
import meetHead from '../images/select-mobile/meet_head.png';
import PageHeader from './PageHeader';
import BackButton from './BackButton';
import gitbutton from '../images/logos/github-logo.png';
import linkbutton from '../images/logos/linked-in.png';
import instabutton from '../images/logos/instagram-logo.png';
import { Link } from 'react-router-dom';
import Button from './Button';

class Meet extends React.Component {

    render() {
        
        const style = {
            textDecoration: "none",
        }

        return (
            <div className="page-content">
                <PageHeader title="MEET" icon={meetHead} />
                <p>This section is intended to facilitate the possibility of contact. To view my profiles on major social networking platforms such as Linked-In, Instagram and Github simply click on the logos below. Alternatively, you can contact me by easily filling in the contact form, also linked in the form of a button.</p>
                <div className="tech-icon-container">
                    <a href="https://www.linkedin.com/in/nicol%C3%B2-tommasi-24ab671a1/" rel="noopener noreferrer" target="_blank">
                        <img src={linkbutton} alt="linked-in logo" />
                    </a>
                    <h1 className="h1-style">LINKED-IN</h1>
                    <div className="push-half"></div>
                    <a href="https://www.instagram.com/grantortino/" rel="noopener noreferrer" target="_blank">
                        <img src={instabutton} alt="git button"  />
                    </a>
                    <h1 className="h1-style">INSTAGRAM</h1>
                    <div className="push-half"></div>
                    <a href="https://github.com/grantortino" rel="noopener noreferrer" target="_blank">
                        <img src={gitbutton} alt="git button"  />
                    </a>
                    <h1 className="h1-style">GITHUB</h1>
                    <div className="push-half"></div>
                    <Link style={style} to="/contact">
                            <Button text="CONTACT FORM" />
                    </Link>
                </div>
                <BackButton pathData="/home" />
            </div>
        )
    }
} export default Meet