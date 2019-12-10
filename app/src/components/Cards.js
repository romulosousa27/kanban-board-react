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
        <Card key={ card.id } moveCard={ this.props.moveCard }>
          <Edit
              id={ card.id }
              edit={ card.edit }
              text={ card.text }
              ToEdit={ this.props.editCard }
              editComponent={ this.props.editCard }
              deleteComponent={ this.props.deleteCard }
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
