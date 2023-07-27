import { useEffect, useState } from "react";
import Luna from "./luna"
import Sun from "./Sun";
const inicialDarkMode=localStorage.getItem('theme')==="dark"?true:false;

const Header = () => { 
    const [darkMode,setDarkMode]=useState(inicialDarkMode)
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme','light')
        }

    },[darkMode]);

    return(
        <>
            <header className="container mx-auto px-4 pt-8 ">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
                    <button onClick={()=>setDarkMode(!darkMode)}>
                        {darkMode?
                            <Sun/> : <Luna/>}
                        
                    </button>
                    </div>
                
            </header>
        </>
    )
}
export default Header;