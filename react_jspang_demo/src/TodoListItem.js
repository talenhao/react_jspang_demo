import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
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
            <li 
                key={this.props.diffkey}
                onClick={this.handleClick}
                >
                {this.props.content} @
                {this.props.username}
            </li>
        );
    }
}

TodoListItem.propTypes = {
    content: PropTypes.string,
    delItem: PropTypes.func,
    index: PropTypes.number,
    diffkey: PropTypes.string,
    username: PropTypes.string.isRequired
}
 
export default TodoListItem;