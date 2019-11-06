import React, { Component } from 'react';
import Card from './Card';
import EditCard from "./EditCard";

export default class Cards extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const cards = this.props.cards.map(card => (
        <Card key={ card.id }>
          <EditCard
              id={ card.id }
              edit={ card.edit }
              text={ card.text }
              ToEdit={this.props.ToEdit}
              editCard={this.props.editCard}
          />
        </Card>
    ));
    return (
        <ul>
          { cards }
        </ul>
    );
  }
}
