import React from 'react'
import { Todo } from "./Todo";
// import PropTypes from 'prop-types'

import '../App.css';

export const TodoItems = (props) => {
    return (
        <>
        <div className="todolist">
            <h3 className="text-center my-4">List</h3>
            <hr />
            {props.todos.map((todo)=>{  
                return   <Todo key ={todo.sno} todo = {todo} ondelete = {props.ondelete}/>
        })
    }
        </div>
        </>
    )
}
