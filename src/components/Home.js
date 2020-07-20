import React from 'react';
// COMPONENTS
import SelectStageCard from '../components/SelectStageCard';
import SelectStageArrows from '../components/SelectStageArrows';
import ContactButton from '../components/ContactButton';
// IMAGES
import knowHead from '../images/select-mobile/know_head.png';
import knowButton from '../images/select-mobile/know.png';
import workHead from '../images/select-mobile/work_head.png';
import workButton from '../images/select-mobile/work.png';
import playHead from '../images/select-mobile/play_head.png';
import playButton from '../images/select-mobile/play.png';
import meetHead from '../images/select-mobile/meet_head.png';
import meetButton from '../images/select-mobile/meet.png';
// STYLE
import '../style/App.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            sections: [
                {
                    pic: knowHead,
                    button: knowButton,
                    link: "/know",
                    altPic: "a little portrait image",
                    altButton: "an img for the button"
                },
                {
                    pic: workHead,
                    button: workButton,
                    link: "/work",
                    altPic: "a little portrait image",
                    altButton: "an img for the button"
                },
                {
                    pic: playHead,
                    button: playButton,
                    link: "/play",
                    altPic: "a little portrait image",
                    altButton: "an img for the button"
                },
                {
                    pic: meetHead,
                    button: meetButton,
                    link: "/meet",
                    altPic: "a little portrait image",
                    altButton: "an img for the button"
                }
            ]
        }
    }

    handlingGoingRight = () => {
        if (this.state.counter >= this.state.sections.length) {
            this.setState({ counter: 1 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    };

    handlingGoingLeft = () => {
        if (this.state.counter === 1) {
            this.setState({ counter: this.state.sections.length })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    };

    render() {
        let activeSection = this.state.sections[this.state.counter - 1];

        return (
            <div className="mobile-grid-case">
                <div className="mob-case mob-aside-left"></div>
                <div className="mob-case mob-upper-empty"></div>
                <div className="mob-case mob-aside-right"></div>
                <div className="select-stage-card">
                    <SelectStageCard data={activeSection} />
                </div>
                <div className="mob-case mob-arrows">
                    <SelectStageArrows goRightCallback={this.handlingGoingRight} goLeftCallback={this.handlingGoingLeft} />
                </div>
                <div className="mob-case mob-contactme">
                    <ContactButton />
                </div>
                <div className="mob-case mob-bottom-empty"></div>
            </div>
        );
    };
};

export default Home;