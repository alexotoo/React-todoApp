import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          // whenever u rendering list  u need to add a key eg key={item.newid}
          return <TodoItem key={item.newid} title={item.newtodo} />;
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}
