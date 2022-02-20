import { useState, useContext, useEffect} from "react"
import {Clock, EditInput, ItemContainer } from "./styled"
import '../index.css'
import { ToDoListContext } from "./context"



const TableItem = (props) => {
    const [data, setData] = useContext(ToDoListContext)
    const [edit, setEdit] = useState(true)
    const [input, setInput] = useState(props.item.task)
    const [checked, setChecked] = useState(false)
    const [important, setImportant] = useState(false)
    
    const hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    const minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()

    

    return(
        <ItemContainer > 

            {
           <p style={{color: checked ? 'green' : important ? 'yellow' : 'white', textDecoration:  checked ? 'line-through' : 'none', width: '210px', overflow:'auto' }}>{props.item.task}</p>
            
            }  
            
            <div>
                <Clock style={{color: checked ? 'green': 'white'}}>{checked ? hours : props.item.hour  }:{checked ? minutes : props.item.minut}</Clock>
                {
                    !checked ? (
                        <i onClick={()=>setChecked(!checked)} className="fa-solid fa-check"></i>
                    ) : (
                        <i onClick={()=>setChecked(!checked)} className="fa-solid fa-check-double"></i>
                    )
                }
                <i onClick={()=>setImportant(!important)} style={{color: important ? 'yellow' : 'white'}}  className="fa-solid fa-star"></i> 
                <i  onClick={()=>props.onDelete(props.item.id)} className="fa-solid fa-trash"></i>
            </div>
                    
                
            
        </ItemContainer>
    
    )
}

export default TableItem