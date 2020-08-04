import React from 'react'
import KnowText01 from '../text/KnowText01';
import KnowText02 from '../text/KnowText02';
import BackButton from '../components/BackButton';
import PageHeader from '../components/PageHeader';
import knowHead from '../images/select-mobile/know_head.png';
import nicCouch from '../images/bio-img/nic-whiskey.jpeg';
import nicKitchen from '../images/bio-img/nic-cook.jpeg';

class Know extends React.Component {

    render() {
        return (
            <div className="page-content">
                <PageHeader title="KNOW" icon={knowHead} />
                    <h1 className="section-header h1-style">MY&nbsp;STORY&nbsp;SO&nbsp;FAR&nbsp;!</h1>
                    <div className="push-half"></div>
                    <img className="know-page-img" src={nicCouch} alt="me sitting on a couch" />
                <KnowText01 />
                    <img className="know-page-img" src={nicKitchen} alt="me cutting vegetables" />
                <KnowText02 className="bottom-margin" />
                <BackButton pathData="/home" />
            </div>)
    }
}; 

export default Know