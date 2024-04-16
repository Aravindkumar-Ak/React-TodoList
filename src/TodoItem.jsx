import React from 'react';
import {FaTrashCan} from "react-icons/fa6"

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className='my-4'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className='text-lg font-bold' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}><FaTrashCan className='text-red-400 text-lg mx-4'/></button>
    </li>
  );
};

export default TodoItem;
