import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardActions from './../actions/CardActions';
import PanelActions from "../actions/PanelActions";
import Cards from './Cards';
import Edit from './Edit';
import { connect } from 'react-redux';
import * as Types from './../constants/Types';

class Panel extends Component {
  static propTypes = {
    createCard: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);

    this.handleCreateCard = this.handleCreateCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleDeletePanel = this.handleDeletePanel.bind(this);
  }

  /** Criação de um novo componente Card */
  handleCreateCard(){
    this.props.createCard();
  }

  /** Deletando o componente Card por ID */
  handleDeleteCard(cardID){
    const panelID = this.props.panel.id;
    this.props.deleteCard(panelID, cardID);
  }

  /** Deletando Panel por ID */
  handleDeletePanel(panelID){
    const {cards} = this.props.panel;
    this.props.deletePanel(panelID);

    cards.forEach(card => this.props.deleteCard(panelID, card));
  }

  render(){
    const {cards, panel} = this.props;
    return (
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <Edit
                  id={ panel.id }
                  edit={ panel.edit }
                  text={ panel.text }
                  ToEdit={ this.props.editPanel }
                  editComponent={ this.props.editPanel }
                  deleteComponent={ this.props.deletePanel }

              />
            </div>
            <div className="panel-body">
              <Cards
                  cards={ cards }
                  ToEdit={ this.props.editCard }
                  editCard={ this.props.editCard }
                  deleteCard={ this.props.deleteCard }
                  moveCard={ this.props.moveCard }
              />
            </div>
            <div className="panel-footer">
              <button className="btn btn-primary" onClick={ this.handleCreateCard }>
                <i className="ion-plus-round"></i> Card
              </button>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: () => dispatch(CardActions.createCard('New Task Creted')),

    editCard: (id, value) => {
      const edited = {id};

      if(!value) {
        edited.edit = true;
      } else {
        edited.edit = false;
        edited.text = value;
      }

      dispatch(CardActions.editCard(edited))
    },

    deleteCard: (panelID, cardID) => {
      dispatch(CardActions.deleteCard(cardID));
      if(!panelID) {
        return
      }
      return dispatch(PanelActions.removeFromPanel(panelID, cardID));
    },
    moveCard: (id, monitorID) => dispatch(PanelActions.movePanel(id, monitorID)),
    insertInPanel: (id, monitorID) => dispatch(PanelActions.insertInPanel(id, monitorID)),
  }
};

/** Drag and Drop */

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
