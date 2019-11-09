import React, { Component } from 'react';
import { connect } from 'react-redux';
import PanelActions from './../actions/PanelActions';

import './Home.scss';
import Panels from './../components/Panel';

class Home extends Component {
  constructor(props){
    super(props)

    this.handleCreatePanel = this.handleCreatePanel.bind(this);
  }

  /**
   * Criaçao de um novo Painel
   */
  handleCreatePanel(){
    this.props.createPanel();
  }

  render(){
    const {panels} = this.props;

    return (
        <div>
          <div className="col-xs-12">
            <button className="btn btn-primary" onClick={ this.handleCreatePanel }>
              <i className="ion-plus-round"></i>New Panel
            </button>
          </div>
          <Panels panels={ panels }/>
        </div>
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
    createPanel: () => dispatch(PanelActions.createPanel('New Panel')),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
