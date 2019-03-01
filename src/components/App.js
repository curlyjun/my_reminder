import React from 'react';
import GroupList from './GroupList.js'
import Search from './Search.js'
import TodoList from './TodoList.js'
import AddGroupBtn from './AddGroupBtn.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            groupname: 'default'
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1'>
                        <div >
                            <Search></Search>
                        </div>
                        <div>
                            <GroupList></GroupList>
                        </div>
                        <div>
                            <AddGroupBtn></AddGroupBtn>
                        </div>
                    </div>

                    <div className='col'>
                    <div className='groupname'>
                        {this.state.groupname}
                    </div>
                        <div>
                            <TodoList></TodoList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 