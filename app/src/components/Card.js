import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <li className="col-xs-12">{ this.props.children }</li>
        </div>
    );
  }
}
