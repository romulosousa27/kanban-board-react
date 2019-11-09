import * as ActionsTypes from './../constants/ActionsTypes';

/**
 *
 * @param state
 * @param action
 */
export default function panels(state = [], action){
  switch(action.type) {
    case ActionsTypes.CREATE_PANEL:
      return [ ...state, action.payload];
      break;

    default:
      return state;
  }
}
