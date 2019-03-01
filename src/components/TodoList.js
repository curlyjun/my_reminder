import React from 'react';

const TodoList = () =>{

    const woo = () =>{
        console.log('out');
    }
    return (
        <input id="TodoItem" onBlur={woo}></input>
    )
}

export default TodoList;