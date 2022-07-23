import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize display-flex justify-content-between my-2">
        <h5>{title}</h5>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fas fa-pen" onClick={handleEdit}></i>
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash" onClick={handleDelete}></i>
          </span>
        </div>
      </li>
    );
  }
}
