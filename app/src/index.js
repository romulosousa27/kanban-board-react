import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import configureStore, { history } from './store';

import Home from './containers/Home'

import cfg from './store';

const store = configureStore();

ReactDOM.render(
    <main>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Route exact path="/" component={ Home }/>
        </ConnectedRouter>
      </Provider>
    </main>,
    document.getElementById('root'));