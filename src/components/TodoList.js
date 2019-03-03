import React from 'react';
import TodoEntry from './TodoEntry'

const TodoList = (props) => {

    const handleMakeTodo = (e) => {
        if (e.target.value !== "") {
            if (e.type === 'keydown' && e.keyCode !== 13) {
                return;
            }
            props.MakeTodo(e.target.value);
        }

        e.target.value = "";
    }
    const list = props.list ? props.list.map((todoObj => {
        if (todoObj.group === props.groupName) {
            return (<TodoEntry 
                    key={todoObj.id} 
                    text={todoObj.todo} 
                    id={todoObj.id} 
                    fnCompleted = {props.fnCompleted}
                    deleteTodo = {props.deleteTodo}/>)
        }
    })) : undefined;

    return (
        <div>
            {list}
            <input className='todoinput' onKeyDown={handleMakeTodo} id="TodoItem" onBlur={handleMakeTodo}></input>

        </div>
    )
}

export default TodoList;