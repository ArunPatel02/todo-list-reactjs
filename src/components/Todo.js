import React from "react";

export const Todo = (props) => {

  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.todo.title}</h5>
          <p className="card-text">
          {props.todo.desc}
          </p>
          <button className="btn btn-danger" onClick = {()=>{props.ondelete(props.todo)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};
