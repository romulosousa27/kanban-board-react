import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import PropTypes from "prop-types";
import * as Types from './../constants/Types';

class Card extends Component {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render(){
    const {connectDragSource, connectDropTarget} = this.props;
    return connectDragSource(connectDropTarget(
        <li className="col-xs-12">{ this.props.children }</li>
    ));
  }
}

/** DragDrop */
const dragDropSrc = {
  beginDrag(props){
    return {id: props.id};
  }
};

const collect = (connnect, monitor) => ({
  connectDragSource: connnect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connnect.dragPreview()
});

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
});

const cardHoverTarget = {
  hover(props, monitor){
    const {id} = props;
    const monitorProps = monitor.getItem();
    const monitor_id = monitorProps.id;

    if(id!==monitor_id) {
      props.moveCard(id, monitor_id);
    }

  }
};

export default DragSource(Types.CARD, dragDropSrc, collect)(
    DropTarget(Types.CARD, cardHoverTarget, collectTarget)(Card)
)
