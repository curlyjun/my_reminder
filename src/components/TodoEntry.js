import React from 'react'

const TodoEntry = (props) => {
    const handle = (e) => {
        if (e.target.checked) {
            props.fnCompleted(props.id);
        }
    }
    return (
        <div>
            <input className='cbox' type='checkbox' onChange={handle}></input>
            <input className='todo' readOnly value={props.text}></input>
        </div>
    )
}

export default TodoEntry;