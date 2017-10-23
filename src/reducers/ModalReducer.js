import * as types from '../constants/ActionTypes'
const localStorage = window.localStorage;
const initialState = {
  visible: false,
  title: ' ',
  description: ' ',
  modalTitle: ' '
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_WINDOW:
      return {
        title: action.title,
        visible: action.visible,
        description: action.description,
        modalTitle: action.modalTitle
      };

    default:
      return state;
  }

};

export default modalReducer;