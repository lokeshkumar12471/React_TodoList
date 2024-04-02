import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
function App() {
  const storeData = JSON.parse(localStorage.getItem('datastore')) || [];
  const [input, setInput] = useState();
  const [todo, setTodo] = useState(storeData);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem('datastore', JSON.stringify(todo));
  })



  return (
    <div className="App">
      <Header />
      <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo} />
      <TodoList todo={todo} setEditTodo={setEditTodo} setTodo={setTodo} />
    </div>
  );
}

export default App;
