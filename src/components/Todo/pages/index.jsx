import React, { useState } from 'react';
import TodoList from '../compoments/TodoList';

const Todo = () => {
    const initTodoList = [{
        id: 1,
        title: 'Eat',
        status: 'new',
        iconImgUrl: 'http://',
        checked: true,
    },
    {
        id: 1,
        title: 'Eat',
        status: 'new',
        iconImgUrl: 'http://',
        checked: true,
    },
    {
        id: 1,
        title: 'Eat',
        status: 'new',
        iconImgUrl: 'http://',
        checked: false,
    }];
    const [todoList, setTodoList] = useState(initTodoList);
    // console.log('todoList', todoList);
    // console.log('stateData', stateData[0].checked);
    const touchbtn = (todo, key) => {
        // // check call event
        // console.log('todo', todo);
        // console.log('alo' + key);
        // clone init data
        const newTodoList = [...todoList];
        // update new data
        const itemChange = {
            ...initTodoList[key],
            status: newTodoList[key].status === 'new' ? 'old' : 'new',
        };
        newTodoList[key] = itemChange;
        // console.log('newTodo', newTodo);
        setTodoList(newTodoList)
    }
    return (
        <div>
            <TodoList todoList={todoList} touchbtn={touchbtn} />
        </div>
    );
}

export default Todo;
