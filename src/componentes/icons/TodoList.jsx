import TodoItems from "./TodoItems";


const TodoList = ({todos, removeTodo, updateTodo}) => {
    return(
        <>
            <div className="bg-white rounded-md [&>article]:p-4 mt-8 ">
                {todos.map((todo)=>(
                    <TodoItems key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                ))}
                
                
            </div>

        </>
    )
 }
 export default TodoList;