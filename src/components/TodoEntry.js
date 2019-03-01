import React from 'react'

const TodoEntry = (props) => {

    return (
        <input readOnly value= {props.text}></input>
    )
}

export default TodoEntry;