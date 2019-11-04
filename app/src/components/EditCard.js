import React, { Component } from 'react';

export default class EditCard extends Component {
  constructor(props){
    super(props)
  }

  renderEdit(){
    return (
        <div>
          <input type="text" className="form-control" defaultValue={ this.props.text } />
        </div>
    )
  }

  // Carrega o texto da Card.
  renderText(){
    return (
        <div>
          <div className="col-xs-10">
            <input type="text" className="form-control" defaultValue={ this.props.text } readOnly/>
          </div>
        </div>
    )
  }

  render(){
    if(this.props.edit) {
      return this.renderEdit()
    }
    return this.renderText()
  }
}
