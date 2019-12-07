import * as ActionsTypes from './../constants/ActionsTypes';
import update from 'react-addons-update';

/**
 *
 * @param state
 * @param action
 */
export default function panels(state = [], action){
  switch(action.type) {
    case ActionsTypes.CREATE_PANEL:
      return [...state, action.payload];

    case ActionsTypes.EDIT_PANEL:
      return state.map(panel => {
        const {id} = action.payload;

        if(id===panel.id) {
          return Object.assign({}, panel, action.payload)
        }

        return panel;
      });

    case ActionsTypes.DELETE_PANEL:
      const {id} = action.payload;
      return state.filter(panel => id!==panel.id);

    case ActionsTypes.MOVE_PANEL:
      const targetDropId = action.payload.id;
      const monitor_id = action.payload.monitor_id;

      const targetIndex = state.findIndex(panel => panel.id === targetDropId);
      const monitorIndex = state.findIndex(panel => panel.id === monitor_id);

      return update(state, {
        $splice: [
            [monitorIndex, 1],
            [targetIndex, 0, state.find(panel => panel.id === monitor_id)]
        ]
      });

    default:
      return state;
  }
}
