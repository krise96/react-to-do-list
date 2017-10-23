import * as types from '../constants/ActionTypes'
import * as _ from 'lodash';
const localStorage = window.localStorage;

export const addTodo = (title, description, isEnd = false, id = null, addToStorage = true) => {
  if(addToStorage){
    id = editStorage({title, description, isEnd });
  }
  return {
    type: types.ADD_TODO,
    title,
    description,
    isEnd,
    id
  };
};

export const editTodo = (title, description, id, isEnd = false) => {
  editStorage({title, description, isEnd, id }, id);
  return {
    type: types.EDIT_TODO,
    title,
    description,
    isEnd,
    id
  };
};

export const deleteTodo = (id) => {
  editStorage(null, id);
  return {
    type: types.DELETE_TODO,
    id
  };
};

const editStorage = (what , to = null) => {
  let storedTodo = JSON.parse(localStorage.getItem("todo"));
  let mustReturn;
  if ( what ) {
    if (to) {
      for (let stored of storedTodo) {
        if (stored.id === what.id) {
          stored.title = what.title;
          stored.description = what.description;
          stored.isEnd = what.isEnd;
        }
      }
    }
    else {
      mustReturn = storedTodo.length + 1;
      storedTodo.push({
        title: what.title,
        description: what.description,
        isEnd: what.description,
        id: storedTodo.length + 1
      });
    }
  }
  else {
    storedTodo = _.remove(storedTodo, (element) => {
      return element.id !== to;
    });
  }
  localStorage.setItem("todo", JSON.stringify(storedTodo));
  return mustReturn;
};