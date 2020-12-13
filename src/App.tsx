import { title } from 'process';
import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log('add new todo', title)
  }

  return( 
  <div> 
  <Navbar/>
  <div className="container">
    <TodoForm onAdd = {addHandler}/>
  </div>
  </div>)
}

export default App;
