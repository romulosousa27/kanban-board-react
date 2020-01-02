import React, { Component } from 'react';
import { connect } from 'react-redux';
import PanelActions from './../actions/PanelActions';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './Home.scss';
import Panels from './../components/Panels';

class Home extends Component {
  constructor(props){
    super(props);

    /** Bind dos metodos  */
    this.handleCreatePanel = this.handleCreatePanel.bind(this);
  }

  /** Criando um novo Painel */
  handleCreatePanel(){
    this.props.createPanel();
  }

  render(){
    const {panels} = this.props;

    return (
        <DndProvider backend={HTML5Backend}>
          <div className="col-xs-12 spacing">
            <button className="btn btn-primary" onClick={ this.handleCreatePanel }>
              <i className="ion-plus-round"></i> Novo Painel
            </button>
          </div>

          <Panels
              panels={ panels }
              editPanel={ this.props.editPanel }
              deletePanel={ this.props.deletePanel }
              movePanel={ this.props.movePanel }
          />
        </DndProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    panels: state.panels
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPanel: () => dispatch(PanelActions.createPanel('Painel Criado')),
    editPanel: (id, value) => {
      const edited = {id};

      if(!value) {
        edited.edit = true;
      } else {
        edited.edit = false;
        edited.text = value;
      }

      dispatch(PanelActions.editPanel(edited));
    },
    deletePanel: (id) => dispatch(PanelActions.deletePanel(id)),
    movePanel: (id, monitor_id) => dispatch(PanelActions.movePanel(id, monitor_id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
