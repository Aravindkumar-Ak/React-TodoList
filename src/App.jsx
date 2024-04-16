import { useState } from 'react';
import './App.css'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { addTask, deleteTask, toggleTask } from './features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  
  // State to store the current todo text
  
  const [todoText, setTodoText] = useState('');
const dispatch=useDispatch();
const todos=useSelector(store=>store.todo.todos)
console.log(todos);
  const addTodo = () => {
    if (todoText.trim() !== '') {
      // Create a new todo object with a unique ID
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      // Add the new todo to the todos list
     dispatch(addTask(newTodo));
      // Clear the input field
      setTodoText('');
    }
  };

  const toggleTodo = (id) => {
    dispatch(toggleTask(id))
  };
  const removeTodo = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <>
     <div className='bg-red-400 w-full h-screen flex flex-col justify-center items-center'>
      <div className='bg-black text-white p-12 text-center'>
      <h1 className='my-2 text-lg'>Todo List</h1>
      <TodoForm addTodo={addTodo} todoText={todoText} setTodoText={setTodoText}/>
      <ul>
        {/* Map over the todos array and render TodoItem components */}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      </div>
    </div>
    </>
  )
}

export default App
