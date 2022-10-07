import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const { todoList, touchbtn } = props;
    console.log('todoList', todoList);
    return (
        <div>
            {
                todoList.map((todo, key) =>
                    <div key={key} className={todo.status === 'new' ? 'check' : 'uncheck'} >
                        <div >
                            {todo.id} {todo.title} {todo.status}
                        </div>
                        <button onClick={() => touchbtn(todo, key)}>alo</button>
                    </div>
                )
            }
        </div>
    );
}

export default TodoList;