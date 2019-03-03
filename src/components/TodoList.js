import React from 'react';
import TodoEntry from './TodoEntry.js'
import CompletedTodoEntry from './CompletedTodoEntry.js'

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
    const list = (() => {
        if (props.selected === 'group') {
            return props.list.map((todoObj => {
                if (todoObj.group === props.groupName) {
                    return (<TodoEntry
                        key={todoObj.id}
                        text={todoObj.todo}
                        id={todoObj.id}
                        fnCompleted={props.fnCompleted}
                        deleteTodo={props.deleteTodo} />)
                }
            }
            ))
        } else if (props.selected === 'completed') {
            return props.clist.map((todoObj => {
                return <CompletedTodoEntry key={todoObj.id} todoObj={todoObj} />
            }))
        } else {
            return;
        }
    })();

    return (
        <div>
            {list}
            {props.selected === 'group' && <input className='todoinput' onKeyDown={handleMakeTodo} id="TodoItem" onBlur={handleMakeTodo}></input>}


        </div>
    )
}

export default TodoList;