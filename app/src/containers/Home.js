import React, { Component } from 'react';
import './Home.scss';
import Panel from "../components/Panel";

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Panel />
      </div>
    );
  }
}
