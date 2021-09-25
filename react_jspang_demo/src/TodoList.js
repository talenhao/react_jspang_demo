import React, {Component, Fragment} from "react";
// antd
import { Button, Input } from "antd";
import { BulbOutlined } from '@ant-design/icons';
import TodoListItem from "./TodoListItem";

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue: "",
            list: [
                'waf',
                'firewall'
            ]
        }
    }

    inputChange(e){
        console.log(e.target.value)
        this.setState(
            {
                inputValue: e.target.value
            }
        )
    }

    addList(){
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue]
            }
        )
    }

    // 删除LIST操作
    delItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState(
            {
                list: list
            }
        )

    }

    render(){
        return(
            <Fragment>
                {/* 活动列表 */}
                <div>
                    <label htmlFor="jspang">Add todo</label>
                    {/* <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> */}
                    <Input placeholder="Todo" prefix={<BulbOutlined />} style={{ width: '20%' }} value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    {/* <button onClick={this.addList.bind(this)}>add</button> */}
                    <Button type="primary" onClick={this.addList.bind(this)}>add</Button>
                </div>
                <ul>
                    {
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
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
