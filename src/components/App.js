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
            nowId: 4,
            todoList: [{id:1, group:'default', todo:'자기전에 운동하기'},
                        {id:2, group:'default', todo:'양치질하고 자기'},
                        {id:3, group: '가고싶은 곳', todo:'북한'}
        ]
        }
        this.makeTodo = this.makeTodo.bind(this);
    }
    handleTodoFocus() {
        document.getElementById('TodoItem').focus();
    }

    makeTodo(todo) {
        let todoObj = {};
        todoObj.id = this.state.nowId;
        todoObj.group = this.state.groupname;
        todoObj.todo = todo;
        var clonedArray = JSON.parse(JSON.stringify(this.state.todoList));
        clonedArray.push(todoObj);
        this.setState({
            todoList: clonedArray,
            nowId: this.state.nowId +1
        })
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
                        <button onClick={this.handleTodoFocus}>+</button>
                    </div>
                        <div>
                            <TodoList MakeTodo={this.makeTodo} list={this.state.todoList} groupName={this.state.groupname}></TodoList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 