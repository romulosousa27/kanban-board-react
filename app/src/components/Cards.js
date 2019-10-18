import React, { Component } from 'react';
import Card from './Card';

export default class Cards extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const cards = this.props.cards.map(card => (
        <Card key={ card.id }/>
    ));

    return (
        <div>
          { cards }
        </div>
    );
  }
}
