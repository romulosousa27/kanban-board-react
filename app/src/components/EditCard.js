import React, { Component } from 'react';

export default class EditCard extends Component {
  constructor(props){
    super(props)

    this.handleToEdit = this.handleToEdit.bind(this)
  }

  // Editando o Componente de Card
  handleToEdit(){
    const {id} = this.props;
    this.props.ToEdit(id);
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
            <input type="text" className="form-control" defaultValue={ this.props.text } onClick={this.handleToEdit} readOnly/>
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
