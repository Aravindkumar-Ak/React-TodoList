import React, { useState } from 'react'

const TodoForm = ({addTodo,todoText,setTodoText}) => {


  return (
    <div>
        <div>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className='p-2 border-0 outline-0 text-black'
        />
        <button onClick={addTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Todo</button>
      </div>
    </div>
  )
}

export default TodoForm