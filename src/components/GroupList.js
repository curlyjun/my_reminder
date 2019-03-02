import React from 'react';
import Group from './Group.js'

const GroupList = (props) => {
    const list = props.groups ? props.groups.map((group,idx) => {
            return (<Group key={idx} name={group} event={props.event}/>)
    }) : undefined;

    return (
        <div>
            {list}
        </div>
    )
}

export default GroupList;