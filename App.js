import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


import { IndexPage } from './pages/Main/index.js'
import { SettingsPage } from './pages/Settings/index.js';

import appReducer from './reducers/appReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

import './global.scss';

const App = () => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/settings" component={SettingsPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
