import ToDoItem from "./ToDoItem"

function ToDoList(props){
    return (
        <div className={props.todos.length>0 ? 'bg-white shadow-md p-2 rounded-xl':''}>
            
            {props.todos.map((todo)=>{
                return (
                    <ToDoItem key={todo.id} todo={todo} 
                        toggleComplete={props.toggleComplete}
                        deleteTodo={props.deleteTodo}
                        editTodo={props.editTodo}
                    />
                )
            })}
            
        </div>
        
    )
}

export default ToDoList;