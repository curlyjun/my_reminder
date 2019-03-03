import React from 'react'

const TodoEntry = (props) => {
    const handle = (e) => {
        if (e.target.checked) {
            props.fnCompleted(props.id);
        }
    }
    const handleDeleteEvent = (e) =>{
        if(e.keyCode === 8){
            props.deleteTodo(props.id)
        }
    }
    return (
        <div>
            <input className='cbox' type='checkbox' onChange={handle}></input>
            <input className='todo' readOnly value={props.text} onKeyDown={handleDeleteEvent}></input>
        </div>
    )
}

export default TodoEntry;