import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import configureStore, { history } from './store';
import './index.scss';
import Home from './containers/Home'

import cfg from './store';
import Tilist from "./images/tilst.png";

const store = configureStore();

ReactDOM.render(
  <div>
    <header id="header">
      <nav className="navbar navbar-default navbar-fixed-top" id="navbar-center">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">
              <img src={Tilist} className="" alt="Kanban React Trello" />
            </a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar">
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="nav navbar-nav">

            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main className="container-fluid" id="main">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={Home} />
        </ConnectedRouter>
      </Provider>
    </main>
  </div>
  , document.getElementById('root'));
