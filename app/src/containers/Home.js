import React, { Component } from 'react';

import Tilist from './../images/tilst.png';

import './Home.scss';

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" id="navbar-center">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar">
                  <span className="icon-bar"> </span>
                  <span className="icon-bar"> </span>
                  <span className="icon-bar"> </span>
                  <a href="" className="navbar-brand">
                    <img src={ Tilist } className="img-responsive" alt=""/>
                  </a>
                </button>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">

                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}