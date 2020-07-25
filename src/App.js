import React, { Component } from 'react';
import HomeContainer from './container/HomeContainer.js'
import Header from './components/Header.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import DetailContainer from './container/DetailContainer.js';
import AddtoCartContainer from './container/AddtoCartContainer.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                    <Route path="/cart">
                        <AddtoCartContainer />
                    </Route>
                    <Route path="/detail/:id" component={DetailContainer} />
                </Switch>
            </div>
        );
    }
}

export default App;