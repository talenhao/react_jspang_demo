import React, { Component, Fragment } from "react";
// antd
import { Button, Input, List } from "antd";
import { BulbOutlined } from '@ant-design/icons';
import TodoListItem from "./TodoListItem";
import store from "./store";

class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        // this.state = {
        //     inputValue: "",
        //     list: [
        //         // 'waf',
        //         // 'firewall'
        //     ]
        // }
        this.state = store.getState()
    }
    
    componentDidMount(){
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    storeChange(){
        this.setState(store.getState());
    }


    inputChange(e) {
        console.log(e.target.value)
        // this.setState(
        //     {
        //         inputValue: e.target.value
        //     }
        // )
        // 使用redux
        const action = {
            type: "inputChange",
            value: e.target.value
        }
        store.dispatch(action)
    }

    addList() {
        // this.setState(
        //     {
        //         list: [...this.state.list, this.state.inputValue]
        //     }
        // )
        const action = {
            type: 'addToList'
        }
        store.dispatch(action)
    }

    // 删除LIST操作
    delItem(index) {
        console.log(index)
        // let list = this.state.list
        // list.splice(index, 1)
        // this.setState(
        //     {
        //         list: list
        //     }
        // )
        const action={
            type: 'delItem',
            index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <Fragment>
                {/* 活动列表 */}
                <div style={{ margin: '10px', width: '500px' }}>
                    <label htmlFor="haotianfei" style={{ margin: '10px' }}>Add todo</label>
                    {/* <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> */}
                    <Input
                        placeholder={this.state.inputValue}
                        prefix={<BulbOutlined />}
                        style={{ width: '320px', marginRight: '10px' }}
                        onChange={this.inputChange.bind(this)}
                        value={this.state.inputValue}
                        />
                    {/* <button onClick={this.addList.bind(this)}>add</button> */}

                    <Button
                        type="primary" 
                        onClick={this.addList.bind(this)}
                        >
                        Add
                    </Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <TodoListItem
                            content={item}
                            // diffkey={index+item}
                            // key={index+item}
                            index={index}
                            username="tianfei"
                            delItem={this.delItem.bind(this)}
                        />
                    )}
                />
                {/* <ul>{
                        this.state.list.map(
                            (item, index) => {
                                return(
                                    <TodoListItem
                                    content={item}
                                    diffkey={index+item}
                                    key={index+item}
                                    index={index}
                                    username="haotianfei"
                                    delItem={this.delItem.bind(this)}
                                    />
                                    )
                                }
                                )
                            }</ul> */}
            </Fragment>
        )
    }
}


export default TodoList;
