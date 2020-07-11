import React from 'react';
// COMPONENTS
import SelectStageCard from '../components/SelectStageCard';
import SelectStageArrows from '../components/SelectStageArrows';
import ContactButton from '../components/ContactButton';
// IMAGES
import knowHead from '../images/select-mobile/know.png';
import knowButton from '../images/select-mobile/know.png';
import workHead from '../images/select-mobile/work_head.png';
import workButton from '../images/select-mobile/work.png';
import playHead from '../images/select-mobile/play_head.png';
import playButton from '../images/select-mobile/play.png';
import meetHead from '../images/select-mobile/meet_head.png';
import meetButton from '../images/select-mobile/meet.png';
// STYLE
import '../style/App.scss';

class App extends React.Component {
    state = {
        know: {
            pic: knowHead,
            button: knowButton,
            link: "some/link1.html"
        },
        work: {
            pic: workHead,
            button: workButton,
            link: "some/link2.html"
        },
        play: {
            pic: playHead,
            button: playButton,
            link: "some/link3.html"
        },
        meet: {
            pic: meetHead,
            button: meetButton,
            link: "some/link4.html"
        }
    }

    render() { 
        return ( 
            <div className="mobile-grid-case">
                <div className="mob-case mob-aside-left"></div>
                <div className="mob-case mob-upper-empty"></div>
                <div className="mob-case mob-aside-right"></div>
                <div className="select-stage-card">
                    <SelectStageCard />
                </div>
                <div className="mob-case mob-arrows">
                    <SelectStageArrows sections={this.state} />
                </div>
                <div className="mob-case mob-contactme">
                    <ContactButton />
                </div>
                <div className="mob-case mob-bottom-empty"></div>
            </div>
        );
    };
};
 
export default App;