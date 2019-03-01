import React from 'react'

const TodoEntry = (props) => {
    const handle = (e) => {
        console.log(e.target.checked)
        console.log(props.id)
    }
    return (
        <div>
            <input type='checkbox' onChange={handle}></input>
            <input readOnly value={props.text}></input>
        </div>
    )
}

export default TodoEntry;