import * as ActionsTypes from './../constants/ActionsTypes';

/**
 *
 * @param state
 * @param action
 */
export default function panels(state = [], action) {
  switch (action.type) {
    case ActionsTypes.CREATE_PANEL:
      return [...state, action.payload];

    case ActionsTypes.EDIT_PANEL:
      return state.map(panel => {
        const {id} = action.payload;
        
        if (id === panel.id) {
          return Object.assign({}, panel, action.payload)
        }

        return panel;
      })

    default:
      return state;
  }
}
