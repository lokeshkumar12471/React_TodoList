import React from 'react';

const TodoList = ({ todo, setEditTodo, setTodo }) => {

    const handleUpdate = (id) => {
        const findtodo = todo.find(item => item.id === id);
        setEditTodo(findtodo);
    }

    const handleComplete = (todoId) => {
        setTodo(
            todo.map((item) => {
                if (item.id === todoId) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        )

    }
    const handleDelete = (id) => {
        setTodo(todo.filter(item => item.id !== id));
    }
    return (
        <div>
            {
                todo.map((item, index) =>
                    <div key={index}>
                        <input value={item.title} type='text' onChange={(e) => e.preventDefault()} style={{ textDecoration: item.completed ? "line-through" : 'none' }} />
                        <button><i className='fa fa-check-circle' onClick={() => handleComplete(item.id)}></i></button>
                        <button><i className='fa fa-edit' onClick={() => handleUpdate(item.id)}></i></button>
                        <button><i className='fa fa-trash' onClick={() => handleDelete(item.id)}></i></button>
                    </div>
                )
            }
        </div>
    );
}

export default TodoList;
