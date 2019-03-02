import React from 'react'

const CompletedTodoEntry = (props) => {
    const handle = (e) => {
        if (e.target.checked) {
            props.fnCompleted(props.id);
        }
    }
    return (
        <div>
            <input readOnly type='checkbox' checked={true}></input>
            <input readOnly value={props.todoObj.todo}></input>
            <div>
            <span>{props.todoObj.group}</span>
            </div>
            
        </div>
    )
}

export default CompletedTodoEntry;