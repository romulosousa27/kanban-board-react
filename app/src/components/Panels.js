import React, { Component } from 'react';
import Panel from "./Panel";

class Panels extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render(){
    const panels = this.props.panels.map(panel => (
        <Panel
            key={ panel.id }
            panel={ panel }
            editPanel={this.props.editPanel}
            deletePanel={this.props.deletePanel}
            movelPanel={this.props.movePanel}
        />
    ));
    return (
        <div>
          { panels }
        </div>
    );
  }
}

export default Panels;
