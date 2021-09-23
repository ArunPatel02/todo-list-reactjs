import React from "react";
import { useState } from "react";

export const Addtodo = (props) => {
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("title and description canot be blank");
    }
    else{
      props.addtodo(title , desc)
      settitle("");
      setdesc("");
    }
  };

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")

  return (
    <div className="container my-2">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value = {title}
            onChange = {(e)=>{
                settitle(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Details
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value = {desc}
            onChange = {(e)=>{
              setdesc(e.target.value)
          }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};
