import * as ActionsTypes from './../constants/ActionsTypes';
import uuid from 'uuid/v4';

/**
 *
 * @param value
 * @returns {{payload: {cards: [], name: *, id: *}, type: *}}
 */
const createPanel = (value) => {
  return {
    type: ActionsTypes.CREATE_PANEL,
    payload: {
      id: uuid(),
      text: value,
      cards: []
    }
  }
};

/**
 *
 * @param edited
 * @returns {{payload: *, type: string}}
 */
const editPanel = (edited) => {
  return {
    type: ActionsTypes.EDIT_PANEL,
    payload: edited
  }
};

/**
 *
 * @param id
 * @returns {{payload: {id: *}, type: string}}
 */
const deletePanel = (id) => {
  return {
    type: ActionsTypes.DELETE_PANEL,
    payload: {id}
  }
};

/**
 *
 * @param id
 * @param monitor_id
 * @returns {{payload: {monitor_id: *, id: *}, type: *}}
 */
const movePanel = (id, monitor_id) => {
  return {
    type: ActionsTypes.MOVE_PANEL,
    payload: {
      id, monitor_id
    }
  }
};

/**
 *
 * @param id
 * @param monitor_id
 * @returns {{payload: {monitor_id: *, id: *}, type: *}}
 */
const moveCard = (id, monitor_id) => {
  return {
    type: ActionsTypes.MOVE_CARD,
    payload: {
      id, monitor_id,
    }
  }
};

/**
 *
 * @param panel_id
 * @param card_id
 * @returns {{payload: {panel_id: *, card_id: *}, type: *}}
 */
const insertInPanel = (panel_id, card_id) => {
  return {
    type: ActionsTypes.INSERT_IN_PANEL,
    payload: {
      panel_id, card_id,
    }
  }
};


const removeFromPanel = (panel_id, card_id) => {
  return {
    type: ActionsTypes.REMOVE_FROM_PANEL,
    payload: {
      panel_id, card_id,
    }
  }
};

export default {
  createPanel,
  editPanel,
  deletePanel,
  movePanel,
  moveCard,
  insertInPanel,
  removeFromPanel,
}
