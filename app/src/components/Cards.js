import React, { Component } from 'react';
import Card from './Card';
import Edit from './Edit';

export default class Cards extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render(){
    const cards = this.props.cards.map(card => (
        <Card key={ card.id }>
          <Edit
              id={ card.id }
              edit={ card.edit }
              text={ card.text }
              ToEdit={this.props.editCard}
              editCard={this.props.editCard}
              deleteCard={this.props.deleteCard}
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
