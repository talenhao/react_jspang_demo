import React, { Component } from 'react';
// antd
import { List } from 'antd';
import PropTypes from 'prop-types';

// 可以使用函数将类修改成无状态组件
class TodoListItemUI extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this.props.index)
        this.props.delItem(this.props.index)
    }

    render() {
        return (
            <List.Item
                onClick={this.handleClick}
            >
                    {this.props.index}
                    &nbsp;
                    {this.props.content} @
                    {this.props.username}
            </List.Item>
        );
    }
}

TodoListItemUI.propTypes = {
    content: PropTypes.string,
    delItem: PropTypes.func,
    username: PropTypes.string.isRequired
}
 
export default TodoListItemUI;