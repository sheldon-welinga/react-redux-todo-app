import { ADD_TODO, DELETE_TODO } from "../actions/todoActionTypes";

const initState = {
  todos: [
    { id: 1, content: "Learn Javascript" },
    { id: 2, content: "Learn react redux" },
    { id: 3, content: "Finish learning MVC with nodejs" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      let newTodos = state.todos.filter((todo) => action.todo_id !== todo.id);
      return {
        ...state,
        todos: newTodos,
      };
    case ADD_TODO:
      let todos = [...state.todos, action.todo];

      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};

export { rootReducer };
