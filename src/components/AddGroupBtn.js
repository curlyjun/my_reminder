import React from 'react'

const AddGroupBtn = (props) => {
    return (
        <button type="button" className="btn btn-primary" onClick={props.clickEvent}>목록 추가</button>
    )
}

export default AddGroupBtn;