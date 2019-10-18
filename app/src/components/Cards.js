import React, { Component } from 'react';
import Card from './Card';

export default class Cards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
