import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import CardReducer from "./CardReducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cards: CardReducer()
});

export default createRootReducer