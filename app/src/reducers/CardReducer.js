import * as ActionsTypes from './../constants/ActionsTypes';

export default function cards(state = [], action){
  switch(action.type) {
    case ActionsTypes.CREATE_CARD:
      return [...state, action.payload];

    case ActionsTypes.EDIT_CARD:
      return state.map(card => {
        const {id} = action.payload;

        if(id===card.id) {
          return Object.assign({}, card, action.payload)
        }
        return card;
      });

    default:
      return state;
  }
}
