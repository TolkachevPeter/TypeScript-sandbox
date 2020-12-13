import React from 'react'

type TodoListProps = {
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li className="todo">
                        <label>
                            <input type="checkbox" />
                            <span></span>
                            <i className="material-icons red-text">delelte</i>
                        </label>
                    </li>
          
    )
})}
 </ul>
    )
}