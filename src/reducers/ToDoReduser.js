import * as types from '../constants/ActionTypes';
import * as _ from 'lodash';

const initialState =
  {
    elements: [{
      id: 0,
      title: "",
      description: "",
      isEnd: false
    }]
  };


const toDoReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        elements: [...state.elements, {
          id: action.id,
          title: action.title,
          description: action.description,
          isEnd: action.isEnd
        }]
      };

    case types.EDIT_TODO:
      return {
        ...state,
        elements: _.map(state.elements, (element) => {
          if(element.id === action.id) {
            element.title = action.title;
            element.description = action.description;
            element.isEnd = action.isEnd;
          }
          return element;
        })
      };
    case types.DELETE_TODO:
      return {
        ...state,
        elements: _.remove(state.elements, (element) => {
            return element.id !== action.id;
        })
      };

    default:
      return state;
  }
};

export default toDoReduser;