import React from 'react';
import { Route } from 'react-router';
import LocalForage from 'localforage';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';

import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Tilist from "./images/tilst.png";

import './index.scss';

const store = configureStore();

/** Banco de dados offline */
const database = LocalForage.createInstance({
  name: 'kanban_react',
  driver: LocalForage.INDEXEDDB,
  description: 'used to store panels and cads',
  version: 1.0,
});

database.getItem('kanban-react')
    .then(value => value)
    .then(value => store)
    .then((store) => {

      ReactDOM.render(
        <div>
          <header id="header">
            <nav className="navbar navbar-default navbar-fixed-top" id="navbar-center">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="#" className="navbar-brand">
                    <img src={ Tilist } className="" alt="Kanban React Trello"/>
                  </a>
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar">
                    <span className="icon-bar"> </span>
                    <span className="icon-bar"> </span>
                    <span className="icon-bar"> </span>
                  </button>
                </div>
                <div className="navbar-collapse collapse" id="navbar">
                  <ul className="nav navbar-nav"></ul>
                </div>
              </div>
            </nav>
          </header>
          <main className="container-fluid" id="main">
            <Provider store={ store }>
              <ConnectedRouter history={ history }>
                <Route exact path="/" component={ Home }/>
              </ConnectedRouter>
            </Provider>
          </main>
        </div>
        ,document.getElementById('root')
      );
      store.subscribe( () => database.setItem('kanban', store.getState()));
});

