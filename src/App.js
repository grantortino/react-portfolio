import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Know from './components/Know';
import Work from './components/Work';
import Play from './components/Play';
import Meet from './components/Meet';


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
                </Switch>
            </main>
        )
    }
}
export default App;