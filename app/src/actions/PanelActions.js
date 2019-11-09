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
      name: value,
      cards: []
    }
  }
};

export default {
  createPanel,
}
