import React from 'react'

const AddGroupInput = (props) => {
    const handleSaveGroup = (e) => {
        if (e.target.value !== "") {
            if (e.type === 'keydown' && e.keyCode !== 13) {
                return;
            }
            props.event(e.target.value);
        }else{
            if (e.type === 'keydown' && e.keyCode !== 13) {
                return;
            }
            props.event(e.target.placeholder)
        }
    }

    return (
        <div>
            <input id="addGroupInput"  onKeyDown={handleSaveGroup} onBlur={handleSaveGroup} autoFocus placeholder={'새로운 목록 ' + String(props.num)}></input>
        </div>
    )
}

export default AddGroupInput;