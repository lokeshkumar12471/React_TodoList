import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((item) =>
            item.id === id ? { title, id, completed } : item
        )
        setTodo(newTodo);
        setEditTodo('');
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    }, [setInput, editTodo]);

    const submitHandle = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodo([...todo, { id: uuidv4(), title: input, complete: false }]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }

    }


    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type='text' placeholder="Enter Some Text" value={input} onChange={handleChange} required />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default Form;
