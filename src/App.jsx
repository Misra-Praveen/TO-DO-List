import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
import React, { useState } from "react"

function App() {
  const [inputText, setInputText]=useState('')
  const [todos, setTodos] = useState([])
  function addTodo(inputText){
    const newTodo={
      id: Date.now(),
      text: inputText,
      completed: false
    };
    setTodos([newTodo,...todos])

  }
  

  function handleSubmit(event){
    event.preventDefault();
    if(inputText.trim()===''){
      return;
    }
    addTodo(inputText);
    setInputText('')
  }

  function toggleComplete(id){
    const updatedTodos= todos.map((todo)=>{
      if(todo.id===id){
        return {...todo, completed:!todo.completed}
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function editTodo(id,newInputText){
    const updatedTodos=todos.map((todo)=>{
      if(todo.id===id){
        return {...todo, text: newInputText}
      }
      return todo;
    });
    setTodos(updatedTodos)
  }
  function deleteTodo(id){
    const updatedTodos=todos.filter((todo)=>{
      return todo.id!==id;
    });
    setTodos(updatedTodos);
  }


  return (
    <div className="max-w-xl mx-auto mt-10 px-4 rounded-b-xl ">
      <Header title="My To-Do List" />
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4 px-1">
        <input type="text" placeholder="Add a task..." className="flex-1 p-2 border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={inputText} onChange={(e)=> setInputText(e.target.value)}></input>
        <button className="bg-blue-500 font-bold text-white px-4 py-2 rounded-xl">
        Add
      </button>
      </form>
      <ToDoList todos={todos} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}></ToDoList>
    </div>
  )
}

export default App
