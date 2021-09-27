import React, { Component, Fragment } from "react";
import store from "./store";
import { addToListAction, delItemAction, inputChangeAction, getListAction} from "./store/actionCreator";
import { urlGetListREQ } from "./urls";
import TodoListUI from "./pages/TodoListUI";

class TodoList extends Component {
    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.inputChange = this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.delItem = this.delItem.bind(this)
        this.state = store.getState()
    }
    
    componentDidMount(){ 
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.getList()
    }

    storeChange(){
        this.setState(store.getState());
    }

    getList(){
        urlGetListREQ().then(
            (result) => {
                console.log("result", result.data.list)
                const data = result.data
                const action = getListAction(data)
                console.log("action:", action)
                store.dispatch(action)
            }
        )
    }

    inputChange(e) {
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }

    addList() {
        const action = addToListAction()
        store.dispatch(action)
    }

    // 删除LIST操作
    delItem(index) {
        // console.log(index)
        const action=delItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <Fragment>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    inputChange={this.inputChange}
                    addList={this.addList}
                    list={this.state.list}
                    delItem={this.delItem}
                />
            </Fragment>
        )
    }
}


export default TodoList;
