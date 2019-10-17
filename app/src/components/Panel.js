import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2>My Panel</h2>
            </div>
            <div className="panel-body">
              Body
            </div>
            <div className="panel-footer">
              <button className="btn btn-primary">
                <i className="ion-plus-round"></i> Card
              </button>
            </div>
          </div>
        </div>
    );
  }
}