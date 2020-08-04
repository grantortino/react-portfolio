import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Know from './components/Know';
import Work from './components/Work';
import Play from './components/Play';
import Meet from './components/Meet';
import Tech from './components/Tech';
import Visuals from './components/Visuals';
import Language from './components/Language';
import Soundcloud from './components/Soundcloud';
import Spotify from './components/Spotify';
import Youtube from './components/Youtube';
import Bandcamp from './components/Bandcamp';
import Contact from './components/Contact';

class App extends React.Component {
    render() {

        return (

            <main>
                {/* Switch element ensure that only one component is rendered at a time */}
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/home" component={Home} exact />
                    <Route path="/know" component={Know} />
                    <Route path="/play" component={Play} />
                    <Route path="/work" component={Work} />
                    <Route path="/meet" component={Meet} />
                    <Route path="/tech" component={Tech} />
                    <Route path="/visuals" component={Visuals} />
                    <Route path="/language" component={Language} />
                    <Route path="/soundcloud" component={Soundcloud} />
                    <Route path="/spotify" component={Spotify} />
                    <Route path="/youtube" component={Youtube} />
                    <Route path="/bandcamp" component={Bandcamp} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </main>
        )
    }
}
export default App;