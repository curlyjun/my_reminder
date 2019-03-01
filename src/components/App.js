import React from 'react';
import GroupList from './GroupList.js'
import Search from './Search.js'
import TodoList from './TodoList.js'
import AddGroupBtn from './AddGroupBtn.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            groupname: 'default',
            todoList: [{group:'default', todo:'자기전에 운동하기'},{group:'default', todo:'양치질하고 자기'}]
        }
    }
    foo() {
        document.getElementById('TodoItem').focus();
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
                        <div className='row align-items-end'>
                            <AddGroupBtn></AddGroupBtn>
                        </div>
                    </div>

                    <div className='col'>
                    <div className='groupname'>
                        {this.state.groupname}
                        <button onClick={this.foo}>+</button>
                    </div>
                        <div>
                            <TodoList click={this.a}></TodoList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 