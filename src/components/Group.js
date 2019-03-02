import React from 'react';

const Group = (props) => {

    const handleSelect = (e) => {
        props.event(e.target.value)
    }
    return(
        <div>
        <input className="group" readOnly value={props.name} onClick= {handleSelect}></input>
        </div>
    )
}

export default Group ;