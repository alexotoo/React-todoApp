import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./Component/TodoList";
import TodoInput from "./Component/TodoInput";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
  };
  // to avoid binding in contructor us arrow functions
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
