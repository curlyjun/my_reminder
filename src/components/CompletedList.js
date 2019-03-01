import React from 'react';

const CompletedList = (props) => {
    const handleToggleChange = () => {
        props.completedTogleChange();
    }
    return (

        <div>
            <div># CompletedList</div>
            <input onClick={handleToggleChange} value="완료 목록"></input>
        </div>
    )
}

export default CompletedList;