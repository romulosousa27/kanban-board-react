import React, { Component } from 'react';

export default class EditComponent extends Component {
  constructor(props){
    super(props);

    this.handleToEdit = this.handleToEdit.bind(this);
    this.handleEdit   = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Editando o Componente de Card
  handleToEdit(){
    const {id} = this.props;
    this.props.ToEdit(id);
  }

  // Editando o Conteudo de dentro do Card
  handleEdit(e){
    if(e.type==='keypress'&&e.key!=='Enter') {
      return
    }

    const text = e.target.value;
    const {id} = this.props;

    if(text.trim().length) {
      this.props.editComponent(id, text)
    }
  }

  // Deletando um Card
  handleDelete(){
    const {id} = this.props;
    this.props.deleteComponent(id);
  }

  renderEdit(){
    return (
        <div>
          <input type="text" className="form-control"
                 defaultValue={ this.props.text }
                 onBlur={ this.handleEdit }
                 onKeyPress={ this.handleEdit }
          />
        </div>
    )
  }

  // Carrega o texto da Card.
  renderText(){
    return (
        <div className="row">
          <div className="col-xs-10 no-padding">
            <input type="text" className="form-control"
                   defaultValue={ this.props.text }
                   onClick={ this.handleToEdit }
                   readOnly
            />
          </div>
          <button className="btn btn-danger btn-delete col-xs-2" onClick={ this.handleDelete }>
            <i className="ion-trash-b"></i>
          </button>
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
