import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./Component/TodoList";
import TodoInput from "./Component/TodoInput";
import uuid from "uuid";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Inputttt</h3>
            <TodoList />
            <TodoInput />
          </div>
        </div>
      </div>
    );
  }
}
