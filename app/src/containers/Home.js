import React, { Component } from 'react';
import Tilist from './../images/tilst.png';
import './Home.scss';
import Panel from "../components/Panel";
import Card from "../components/Card";

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <Panel>
            <Card />
          </Panel>
        </div>
    );
  }
}