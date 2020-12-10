import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => {
            return (
              <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
                <span
                  className="delete material-icons"
                  onClick={() => deleteTodo(todo.id)}
                >
                  delete
                </span>
              </div>
            );
          })
      ) : (
        <div className="center no-todo">You have no todo's left</div>
      )}
    </div>
  );
};

export default Todos;
