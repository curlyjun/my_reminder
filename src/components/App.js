import React from 'react';
import GroupList from './GroupList.js'
import Search from './Search.js'
import TodoList from './TodoList.js'
import AddGroupInput from './AddGroupInput.js'

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
            seletedListName: 'group'
        }
        this.makeTodo = this.makeTodo.bind(this);
        this.handleAddGroup = this.handleAddGroup.bind(this);
        this.handleSaveGroup = this.handleSaveGroup.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
        this.completedUpdate = this.completedUpdate.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
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
            seletedListName: 'group'
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
            seletedListName: 'completed',
            groupname: '완료 목록',
        })
    }
    deleteTodo(id) {
        let clonedArray = JSON.parse(JSON.stringify(this.state.todoList));
        for (let i = 0; i < clonedArray.length; i++) {
            if (clonedArray[i].id === id) {
                clonedArray.splice(i, 1);
                break;
            }
        }
        this.setState({
            todoList: clonedArray
        })
    }
    render() {
        return (
            <div className='container no-gutters'>
                <div className='row foo'>
                    <div className='col-3 left-col'>
                        <div className="row h-100">
                            <div className='col'>
                                <Search></Search>
                                <input className='col-12 group' onClick={this.toggleChange} value="📒완료 목록" readOnly></input>
                                <div id="GList" className='col-12'>
                                    <GroupList
                                        groups={this.state.groups}
                                        event={this.changeGroup} />
                                    {this.state.toggle && <AddGroupInput event={this.handleSaveGroup} num={this.listnum++} />}
                                </div>
                            </div>
                            <div className='col align-self-end'>
                                <div className='col'>
                                    <button className='addlist' onClick={this.handleAddGroup}><span role='img'>➕</span> 목록 추가</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='row'>
                            <div className='groupname col'>
                                {this.state.groupname}
                            </div>
                            <div className='col-1'>
                                {/* +버튼 */}
                                <button className='plusbtn' onClick={this.handleTodoFocus}>+</button>
                            </div>
                        </div>
                        <div>
                            <TodoList
                                selected={this.state.seletedListName}
                                MakeTodo={this.makeTodo}
                                list={this.state.todoList}
                                clist={this.state.completedList}
                                groupName={this.state.groupname}
                                fnCompleted={this.completedUpdate}
                                deleteTodo={this.deleteTodo} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default App; 