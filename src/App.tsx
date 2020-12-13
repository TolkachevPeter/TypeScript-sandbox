import { title } from 'process';
import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';


function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
  }
  const removeHandler = (id: number) => {
  }
  return( 
  <div> 
  <Navbar/>
  <div className="container">
    <TodoForm onAdd = {addHandler}/>

    <TodoList 
    todos={todos}
    onToggle={toggleHandler}
    onRemove={removeHandler}
    />
  </div>
  </div>)
}

export default App;
