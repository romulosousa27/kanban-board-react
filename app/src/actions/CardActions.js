import * as ActionsTypes from '../constants/ActionsTypes';
import uuid from 'uuid';

// criação de um novo card
const createCard = (value) => {
  return {
    type: ActionsTypes.CREATE_CARD,
    payload: {
      id: uuid.v4(),
      edit: false,
      text: value
    }
  }
};

export default {
  createCard
}