import React from 'react';
import GroupList from './GroupList.js'
import Search from './Search.js'
import TodoList from './TodoList.js'
import AddGroupBtn from './AddGroupBtn.js'
import AddGroupInput from './AddGroupInput.js'
import CompletedTodoList from './CompletedTodoList.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groupname: '새로운 목록',
            groups: ['새로운 목록'],
            nowId: 1,
            todoList: [],
            completedList: [],
            toggle: false,
            toggle_for_completed: false
        }
        this.makeTodo = this.makeTodo.bind(this);
        this.handleAddGroup = this.handleAddGroup.bind(this);
        this.handleSaveGroup = this.handleSaveGroup.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
        this.completedUpdate = this.completedUpdate.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
    }
    listnum = 2;
    handleTodoFocus() {
        document.getElementById('TodoItem') && document.getElementById('TodoItem').focus();
    }
    handleAddGroup() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    handleSaveGroup(gName) {
        if (!gName.includes('새로운 목록')) {
            console.log(gName);
            this.listnum--;
        }
        var clonedArray = JSON.parse(JSON.stringify(this.state.groups));
        clonedArray.push(gName);
        //이미 있는 그룹이름이라면? ================================================
        this.setState({
            groupname: gName,
            groups: clonedArray,
            toggle: false,

        })
    }
    makeTodo(todo) {
        let todoObj = {};
        todoObj.id = this.state.nowId;
        todoObj.group = this.state.groupname;
        todoObj.todo = todo;
        let clonedArray = JSON.parse(JSON.stringify(this.state.todoList));
        clonedArray.push(todoObj);
        this.setState({
            todoList: clonedArray,
            nowId: this.state.nowId + 1
        })
    }
    changeGroup(groupname) {
        this.setState({
            groupname: groupname,
            toggle_for_completed: false
        })
    }
    completedUpdate(id) {
        let clonedArray = JSON.parse(JSON.stringify(this.state.todoList));
        let completedData = null;
        for (let i = 0; i < clonedArray.length; i++) {
            if (clonedArray[i].id === id) {
                //splice하면 배열로 반환된다....
                completedData = clonedArray.splice(i, 1);
                break;
            }
        }
        let clonedCompletedArray = JSON.parse(JSON.stringify(this.state.completedList));
        clonedCompletedArray.push(completedData[0]);
        this.setState({
            todoList: clonedArray,
            completedList: clonedCompletedArray
        })

    }
    toggleChange() {
        this.setState({
            toggle_for_completed: true,
            groupname: '완료 목록',
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-5'>
                        <div >
                            <Search></Search>
                        </div>
                        <div>
                            <div># CompletedList</div>
                            <input onClick={this.toggleChange} value="완료 목록" readOnly></input>
                        </div>
                        <div id="GList">
                            <GroupList
                                groups={this.state.groups}
                                event={this.changeGroup} />
                            {this.state.toggle && <AddGroupInput event={this.handleSaveGroup} num={this.listnum++} />}
                        </div>
                        <div className='row align-items-end'>
                            <AddGroupBtn clickEvent={this.handleAddGroup}></AddGroupBtn>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='groupname'>
                            {this.state.groupname}
                            {/* +버튼 */}
                            <button onClick={this.handleTodoFocus}>+</button>
                        </div>
                        <div>
                            {this.state.toggle_for_completed ?
                                <CompletedTodoList
                                    list={this.state.completedList} />
                                :
                                <TodoList
                                    MakeTodo={this.makeTodo}
                                    list={this.state.todoList}
                                    groupName={this.state.groupname}
                                    fnCompleted={this.completedUpdate} />}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 