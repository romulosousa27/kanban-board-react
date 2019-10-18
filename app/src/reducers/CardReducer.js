import * as ActionsTypes from '../constants/ActionsTypes';

export default function cards(state = [], action){
  switch(action) {
    case ActionsTypes.CREATE_CARD:
      console.log(...state, action.payload);
      return [...state, action.payload]
      break;

    default:
      return state;
  }
}