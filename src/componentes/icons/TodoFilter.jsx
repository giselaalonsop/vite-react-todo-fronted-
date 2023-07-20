const TodoFilter = () => { 
    return(
        <>
            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white  rounded-md flex justify-center p-4 gap-4">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Actived</button>
                <button className="hover:text-blue-600">Completed</button>
                </div>
          </section>
        </>
    )
}
export default TodoFilter;