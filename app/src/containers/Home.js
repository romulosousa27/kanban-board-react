import React, { Component } from 'react';
import './Home.scss';
import Panels from "../components/Panel";

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <div className="col-xs-12">
            <button className="btn btn-primary">
              <i className="ion-plus-round"></i>New Panel
            </button>
          </div>

          <Panels
              panels={ [] }
          />
        </div>
    );
  }
}
