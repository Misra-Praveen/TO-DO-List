import React, {useState} from "react"

function ToDoItem(props){

    const [isEditing, setIsEditing]=useState(false);
    const [editText, setEditText]=useState(props.todo.text)
    function handleEditClick(){
        setIsEditing(true)
        // props.editTodo(props.todo.id)
    }
    function handleSaveClick(){
        props.editTodo(props.todo.id, editText)
        setIsEditing(false)
    }
    function handleDeleteClick(){
        props.deleteTodo(props.todo.id)
        
    }
    return (
        <div className="flex items-center justify-between p-2 border-b ">
            <div className="flex items-center gap-2">
                
                <input type="checkbox" checked={props.todo.completed}
                    onChange=  {function(){
                    props.toggleComplete(props.todo.id)
                }} />
                {isEditing ? (<input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} className="border-1 p-1.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" />): <p className={props.todo.completed ? 'line-through text-gray-400': ''}>{props.todo.text}</p>}
                
            </div>
            <div className="flex gap-2">
            { props.todo.completed ? (
                <button onClick={handleDeleteClick} className="text-white font-bold bg-red-500 px-2 py-1 rounded">Delete</button>
              ) : isEditing ? (
                <>
                    <button onClick={handleSaveClick} className="text-white font-bold bg-green-500 px-2 py-1 rounded">Save</button> 
                  <button onClick={handleDeleteClick} className="text-white font-bold bg-red-500 px-2 py-1 rounded">Delete</button>
                </>
                  ) : (
                  <>
                    <button onClick={handleEditClick} className="text-white font-bold bg-blue-500 px-2 py-1 rounded">
                    Edit
                  </button>
                   <button onClick={handleDeleteClick} className="text-white font-bold bg-red-500 px-2 py-1 rounded">Delete</button>
                  
                  </>
                  )
            }
               
            </div>
        </div>
    )
}
export default ToDoItem;