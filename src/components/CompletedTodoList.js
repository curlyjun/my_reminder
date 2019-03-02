import React from 'react';
import CompletedTodoEntry from './CompletedTodoEntry.js'

const CompletedTodoList = (props) => {

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
        return <CompletedTodoEntry key = {todoObj.id} todoObj={todoObj}/>
    })) : undefined;

    return (
        <div>
            <div># CompletedTodoList</div>
            {list}

        </div>
    )
}

export default CompletedTodoList;