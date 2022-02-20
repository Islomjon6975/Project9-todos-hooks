import { useState, useContext } from "react"
import { Empty, LogoContainer, LogoTitle, TableContainer } from "./styled"
// import '../index.css'
import { ToDoListContext } from "./context"
import logo from './logo.jpg'
import TableItem from "./TableItem.jsx"

const Table = () => {
    const [data, setData] = useContext(ToDoListContext)
    

    const onDelete = (id) => {
        const newArr = data.filter(item => item.id !== id)
        setData(newArr)
    }

    
    return(
        <TableContainer>
            {
                data.length ? (data.map((item) => (
                    <TableItem 
                        key={item.id} 
                        item={item} 
                        onDelete={onDelete}
                        />
                ))) : (
                    <LogoContainer>
                        <Empty src={logo} alt="" />
                        <LogoTitle>Add some todos</LogoTitle>

                    </LogoContainer>
                )
            }
        </TableContainer>
    )
}

export default Table