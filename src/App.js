import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Directory from './pages/Directory';
import Login from './pages/Login';
import Header from './components/Header';

const App = () => {
    return(
        <Router>
            <Header />            
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/directory" component={Directory}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
    
            
}

export default App;
