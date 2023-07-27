import Check from "./check";
import Cross from "./cross";

const TodoItems = ({todo, removeTodo, updateTodo,}) => { 
    const {id, title, completed}=todo
    
    return(
        <>
            <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4 ">
                    {/* <button className="inline-block  h-5 w-5 rounded-full border-2 flex-none "></button> */}
                    <button className={`${
                        completed? 
                        "grid justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-5 w-5 rounded-full border-2 flex-none " 
                        :"inline-block  h-5 w-5 rounded-full border-2 flex-none " }`} onClick={()=>updateTodo(id)} >
                        {
                            completed && <Check/>
                        }
                        
                        
                        
                    </button>
                    
                    <p className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}>
                        {title}
                    
                    </p>
                    <button  onClick={()=>removeTodo(id)} className="flex-none"><Cross/>
                    </button>
            </article>
        </>
    )
}
export default TodoItems;