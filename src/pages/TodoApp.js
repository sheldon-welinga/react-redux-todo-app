import React from "react";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import { connect } from "react-redux";
import { deleteTodo, addTodo } from "../actions/todoActions";

class TodoApp extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       todos: [
  //         // { id: 1, content: "buy some milk" },
  //         // { id: 2, content: "play mario kart" },
  //       ],
  //     };
  //   }

  //   deleteTodo = (id) => {
  //     const todos = this.state.todos.filter((todo) => todo.id !== id);

  //     this.setState({ todos });
  //   };

  //   addTodo = (newTodo) => {
  //     newTodo.id = Math.random();

  //     let todos = [...this.state.todos, newTodo];

  //     this.setState({
  //       todos,
  //     });
  //   };

  //   componentDidMount() {
  //     localStorage.setItem("todos", JSON.stringify(this.props.todos));
  //   }

  render() {
    console.log(this.props);
    // const { todos } = this.state;
    const { todos, deleteTodo, addTodo } = this.props;

    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's App</h1>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    addTodo: (newTodo) => dispatch(addTodo(newTodo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
