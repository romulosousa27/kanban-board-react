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

    case ActionsTypes.MOVE_CARD:
      const targetCard_id = action.payload.id;
      const monitorCard_id = action.payload.monitor_id;

      let targetPanel = state.filter( panel => panel.cards.indexOf(targetCard_id));
      let monitorPanel = state.filter( panel => panel.cards.indexOf(monitorCard_id));

      targetPanel = targetPanel[0];
      monitorPanel = monitorPanel[0];

      const targetCardIndex = targetPanel.cards.indexOf(targetCard_id);
      const monitorCardIndex = monitorPanel.card.indexOf(monitorCard_id);

      if(targetPanel.id === monitorPanel.id){
        return state.map((panel) => {
          const panel_id = panel.id;

          if(monitorPanel.id !== panel_id){
            return panel;
          }

          return Object.assign({}, panel,  {
            cards: update(monitorPanel.cards, {
              $splice: [
                  [monitorCardIndex, 1],
                  [targetCardIndex, 0, monitorCard_id]
              ]
            })
          });

        });
      }

      return state.map((panel) => {
        const panel_id = panel.id;

        if(targetPanel.id === panel_id){
          return Object.assign({}, panel, {
            cards: update(panels.cards, {
              $splice: [
                  [targetCardIndex, 0, monitor_id]
              ]
            })
          });
        }

        if(monitorPanel.id === panel_id){
          return Object.assign({}, panel, {
            cards: update(panels.cards, {
              $splice: [
                [monitorCardIndex, 1]
              ]
            })
          });
        }

      });

    default:
      return state;
  }
}
