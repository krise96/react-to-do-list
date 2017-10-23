import * as types from '../constants/ActionTypes'

export const changeWindow = (visible, modalTitle, title = "", description = "") => {
  return {
    type: types.CHANGE_WINDOW,
    modalTitle,
    visible,
    title,
    description
  };
};