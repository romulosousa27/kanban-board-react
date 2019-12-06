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
    payload: {
      id,
    }
  }
};

/**
 *
 * @param id
 * @param monitorID
 * @returns {{payload: {monitorID: *, id: *}, type: *}}
 */
const movePanel = (id, monitorID) => {
  return {
    type: ActionsTypes.MOVE_PANEL,
    payload: {
      id, monitorID
    }
  }
};

/**
 *
 * @param id
 * @param monitorID
 * @returns {{payload: {monitorID: *, id: *}, type: *}}
 */
const moveCard = (id, monitorID) => {
  return {
    type: ActionsTypes.MOVE_CARD,
    payload: {
      id, monitorID,
    }
  }
};

/**
 *
 * @param panelID
 * @param cardID
 * @returns {{payload: {panelID: *, cardID: *}, type: *}}
 */
const insertInPanel = (panelID, cardID) => {
  return {
    type: ActionsTypes.INSERT_IN_PANEL,
    payload: {
      panelID, cardID,
    }
  }
};


const removeFromPanel = (panelID, cardID) => {
  return {
    type: ActionsTypes.REMOVE_FROM_PANEL,
    payload: {
      panelID, cardID,
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
