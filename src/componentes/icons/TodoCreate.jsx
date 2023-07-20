import { useState } from "react";

const TodoCreate = ({createTodos}) => { 
    const [title,setTitle]=useState('')

    const handleSubmitAddTodo=(e)=>{
        e.preventDefault();
        if(title.trim().length>0){
            createTodos(title);
            return setTitle('')
        }
        setTitle('');

    }
    
    return(
        <>
            <form  onSubmit={handleSubmitAddTodo} className="flex gap-4 overflow-hidden rounded-md bg-white py-4   items-center px-4 mt-8 ">
              <span className="inline-block  h-5 w-5 rounded-full border-2 "></span>
              <input
                type="text"
                placeholder="Create a new Todo"
                className="w-full outline-transparent text-gray-400"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                >
                


              </input>
          </form>
        </>
    )
 }
 export default TodoCreate;