import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      id: 4,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state);

    this.setState({ content: "" });

    this.setState((prevstate) => {
      return { id: prevstate.id + 1 };
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo:</label>
          <input
            type="text"
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
