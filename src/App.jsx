import { useState } from "react"
import Header from "./componentes/icons/Header"
import TodoComputed from "./componentes/icons/TodoComputed"
import TodoCreate from "./componentes/icons/TodoCreate"
import TodoFilter from "./componentes/icons/TodoFilter"
import TodoList from "./componentes/icons/TodoList"


const iniciarTodos=[
  {id:1, title:"go to the gym", completed:false},
  {id:2, title:"Learning english", completed:false},
  {id:3, title:"completed tutorial",completed:false},
  {id:4, title:"watched barbie the movie", completed:false},
  {id:5, title: "cook hotcakes", completed:true}
]
function App() {
  const [todos, setTodos]=useState(iniciarTodos);

  const createTodos=(title)=>{
    const newTodo={
      id:todos.length +1,
      title:title.trim(),
      completed:false

    }
     setTodos([...todos, newTodo])
     
  }
  const removeTodo=(id)=>{
    setTodos(todos.filter((todo)=>  todo.id !== id ));

  }
  const updateTodo=(id)=>{
    setTodos(todos.map((todo)=> todo.id===id? {...todo, completed: !todo.completed}: todo));
  }
  const computedItemsLeft= todos.filter((todo)=> !todo.completed).length;

  const clearCompleted=()=>{
    setTodos(todos.filter((todo)=> !todo.completed));
  }

  return (
    <>
    <div className=" min-h-screen bg-contain bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat  bg-gray-300  ">
      <Header/>
      
      <main className="container mx-auto px-4 mt-8 ">
        <TodoCreate createTodos={createTodos}/>
        <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} todos={todos}/>
        <TodoFilter/>
          
      </main>

      <footer className="mt-8 text-center text-gray-400">Drag and drop de reorder list</footer>
    </div>

    
    </>
      
  )
}

export default App
