import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { todo, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{todo}</h6>
        <div className="pen-del-incons">
          <span className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span className="max-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
