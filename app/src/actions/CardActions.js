import * as ActionsTypes from './../constants/ActionsTypes';
import uuid from 'uuid/v4';

/**
 * Criação de uma Nova Tarefa(Card)
 * @param value
 * @returns {{payload: {edit: boolean, id: *, text: *}, type: *}}
 */
const createCard = (value) => {
  return {
    type: ActionsTypes.CREATE_CARD,
    payload: {
      id: uuid(),
      edit: false,
      text: value
    }
  }
};

/**
 * Editando um a Tarefa
 * @param edited
 * @returns {{payload: *, type: *}}
 */
const editCard = (edited) => {
  return {
    type: ActionsTypes.EDIT_CARD,
    payload: edited
  }
};

export default {
  createCard,
  editCard,
}
