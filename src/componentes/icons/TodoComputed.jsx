const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    const number=computedItemsLeft
    
    return(
        <>
            <section className="py-4 px-4 flex justify-between rounded-b-md bg-white">
                <span className="text-gray-400">{number} items letf- </span>
                <button onClick={()=>clearCompleted()} className="text-gray-400 px-1">  Clear Completed</button>
            </section>
        </>
    )
 }
 export default TodoComputed;