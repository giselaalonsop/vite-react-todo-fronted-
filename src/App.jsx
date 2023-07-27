import { useEffect, useState } from "react"
import Header from "./componentes/icons/Header"
import TodoComputed from "./componentes/icons/TodoComputed"
import TodoCreate from "./componentes/icons/TodoCreate"
import TodoFilter from "./componentes/icons/TodoFilter"
import TodoList from "./componentes/icons/TodoList"


const iniciarTodos=JSON.parse(localStorage.getItem("todos")) || 
[
  {id:1, title:"go to the gym", completed:false},
  {id:2, title:"Learning english", completed:false},
  {id:3, title:"completed tutorial",completed:false},
  {id:4, title:"watched barbie the movie", completed:false},
  {id:5, title: "cook hotcakes", completed:true}
];

function App() {
  const [todos, setTodos]=useState(iniciarTodos);
  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);
  const[filter,setFilter]=useState("all");
  const filteredTodos=()=>{
    switch(filter){
      case("all"):
        return todos;
      case("active"):
        return todos.filter((todos)=>!todos.completed)
      case("completed"):
        return todos.filter((todos)=>todos.completed)
      default:
        return todos;
    }
  }
  const changeFilter=(filter)=>setFilter(filter);

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
  const getComputedItemsLeft = () => {
    return todos.filter((todo) => !todo.completed).length;
  };
  

  const clearCompleted=()=>{
    setTodos(todos.filter((todo)=> !todo.completed));
  }

  return (
    <>
    <div className=" dark:bg-gray-900 min-h-screen bg-contain bg-[url('./assets/images/bg-mobile-light.jpg')]
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat transition-all duration-1000 bg-gray-300
    md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header/>
      
      <main className="container mx-auto px-4 mt-8 md:max-w-xl ">
        <TodoCreate createTodos={createTodos}/>
        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        <TodoComputed
        getComputedItemsLeft={getComputedItemsLeft}
        clearCompleted={clearCompleted}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
          
      </main>

      <footer className="mt-8 text-center text-gray-400">Drag and drop de reorder list</footer>
    </div>

    
    </>
      
  )
}

export default App