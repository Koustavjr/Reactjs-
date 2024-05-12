import { useContext,createContext } from "react";


// here todo are objects in all the functions
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        },
    ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{},
    
})

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider =TodoContext.Provider