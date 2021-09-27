import React from 'react';
import { Button, List, Input } from 'antd';
import { BulbOutlined } from '@ant-design/icons'
import TodoListItemUI from './TodoListItemUI';


class TodoListUI extends React.Component {
    render() { 
        return (
            // 活动列表
            <div style={{ margin: '10px', width: '500px' }}>
            <label htmlFor="tianfei" style={{ margin: '10px' }}><font size='3'>Add todo</font></label>
            <Input
                placeholder={this.props.inputValue}
                prefix={<BulbOutlined />}
                style={{ width: '349px', marginRight: '10px', marginBottom: '10px'}}
                onChange={this.props.inputChange}
                value={this.props.inputValue}
                />
            <Button
                type="primary" 
                onClick={this.props.addList}
                >
                Add
            </Button>
            <List
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <TodoListItemUI
                        content={item}
                        index={index}
                        username="tianfei"
                        delItem={this.props.delItem}
                    />
                )}
            />
            </div>
        );
    }
}
 
export default TodoListUI;

