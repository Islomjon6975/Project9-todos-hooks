import { useState } from "react";
import { createContext } from "react";

export const ToDoListContext = createContext();

export const ContextProvider = ({children}) => {
    const hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    const minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
    const [data, setData] = useState([
        // {id: 1, task: 'complete assignment', hour: hours, minut: minutes},
        // {id: 2, task: 'watch videos', hour: hours, minut: minutes},
        // {id: 3, task: 'learning something', hour: hours, minut: minutes},
        // {id: 4, task: 'sleeping', hour: hours, minut: minutes},
        // {id: 5, task: 'working', hour: hours, minut: minutes},
        // {id: 6, task: 'doing projects', hour: hours, minut: minutes},
    ])

    const [checked, setChecked] = useState(true)
    return(
        <ToDoListContext.Provider value={[data, setData]}>
            {children}
        </ToDoListContext.Provider>
    )
}