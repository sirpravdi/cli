import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { IndexPage } from './pages/Main/index.js'
import { SettingsPage } from './pages/Settings/index.js';

import './global.scss';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/settings" component={SettingsPage}/>
        </Switch>
      </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
