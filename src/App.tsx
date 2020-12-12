import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

function App() {
  return( 
  <div> 
  <Navbar/>
  <div className="container">
    <TodoForm/>
  </div>
  </div>)
}

export default App;
