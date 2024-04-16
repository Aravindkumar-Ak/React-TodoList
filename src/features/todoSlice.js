import {createSlice} from "@reduxjs/toolkit"
   
const items=localStorage.getItem("todo")!=null?
JSON.parse(localStorage.getItem('todo')) :[]

export const todoSlice=createSlice({
      name:"todo",
      initialState:{
        todos:items
      },
      reducers:{
        addTask:(state,action)=>{
           state.todos.push(action.payload)
           localStorage.setItem("todo",JSON.stringify(state.todos))
        },
        deleteTask:(state,action)=>{
            state.todos=state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todo",JSON.stringify(state.todos))
        },
        toggleTask:(state,action)=>{
            state.todos= state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              );
              localStorage.setItem("todo",JSON.stringify(state.todos))
        }
      }
    })

    export const {addTask,deleteTask,toggleTask}=todoSlice.actions
    export default todoSlice.reducer;