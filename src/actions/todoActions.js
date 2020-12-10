import { ADD_TODO, DELETE_TODO } from "./todoActionTypes";

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    todo_id: id,
  };
};

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    todo: newTodo,
  };
};
