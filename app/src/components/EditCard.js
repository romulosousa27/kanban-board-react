import React, { Component } from 'react';

export default class EditCard extends Component {
  constructor(props) {
    super(props);

    this.handleToEdit = this.handleToEdit.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  // Editando o Componente de Card
  handleToEdit() {
    const { id } = this.props;
    this.props.ToEdit(id);
  }

  // Editando o Conteudo de dentro do Card
  handleEditCard(e) {
    if (e.type === 'keypress' && e.key !== 'Enter') {
      return
    }

    const text = e.target.value;
    const id = this.props;

    if (text.trim().length) {
      this.props.editComponent(id, text)
    }
  }

  // Deletando um Card
  handleDeleteCard() {
    const { id } = this.props;
    this.props.deleteCard(id);
  }

  renderEdit() {
    return (
      <input type="text" className="form-control"
        defaultValue={this.props.text}
        onBlur={this.handleEditCard}
        onKeyPress={this.handleEditCard}
      />
    )
  }

  // Carrega o texto da Card.
  renderText() {
    return (
      <div>
        <div className="col-xs-10">
          <input type="text" className="form-control" defaultValue={this.props.text} onClick={this.handleToEdit}
            readOnly />
        </div>
        <button className="col-xs-2" onClick={this.handleDeleteCard}>
          <i className="ion-trash-b"></i>
        </button>
      </div>
    )
  }

  render() {
    if (this.props.edit) {
      return this.renderEdit()
    }
    return this.renderText()
  }
}
