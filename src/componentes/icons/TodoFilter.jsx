const TodoFilter = ({changeFilter,filter}) => { 
    

    
    return(
        <>
            <section className="container mx-auto mt-8 px-4 transition-all duration-1000">
                <div className="bg-white  rounded-md flex justify-center p-4 gap-4  dark:bg-gray-800 transition-all duration-1000">
                <button 
                        onClick={()=> changeFilter("all")}
                        className={`${
                                        filter==="all"
                                        ? "text-blue-600"
                                        :"text-gray-400 hover:text-blue-500" }`}>All</button>
                <button onClick={()=> changeFilter("active")}
                        className={`${filter==="active"
                        ? "text-blue-600"
                        :"text-gray-400 hover:text-blue-500" }`}>Actived</button>
                <button onClick={()=> changeFilter("completed")}
                        className={`${filter==="completed"
                        ? "text-blue-600"
                            :"text-gray-400 hover:text-blue-500" }`}>Completed</button>
                </div>
          </section>
        </>
    )
}
export default TodoFilter;