import { useState, useEffect, useContext } from "react";
import { DarkModeToggle,NavbarContainer, Add, Title, Datee, DateContainer, Tasks, ClearAll, DateeBold, InputContainer, Input } from "./styled.js";
import { ToDoListContext } from "./context.jsx";

const Navbar = () => {

    const [clock, setClock] = useState()
    const [data, setData] = useContext(ToDoListContext)


    const getDaysOfTheWeek = () => {
        const number = new Date().getDay();
        
        switch(number){
            case 0: 
                    return 'Sunday'
            case 1: 
                    return "Monday"
            case 2: 
                    return "Tuesday"
            case 3: 
                    return "Wednesday"
            case 4: 
                    return "Thursday"
            case 5: 
                    return "Friday"
            case 6: 
                    return "Saturday"
            default: 
                    return 'Nothing here.'

        }
    }

    const getMonth = () => {
        const number = new Date().getMonth();
        switch(number){
            case 0: 
                    return 'January'
            case 1: 
                    return "February"
            case 2: 
                    return "March"
            case 3: 
                    return "April"
            case 4: 
                    return "May"
            case 5: 
                    return "June"
            case 6: 
                    return "July"
            case 7: 
                    return "August"
            case 8: 
                    return "September"
            case 9: 
                    return "October"
            case 10: 
                    return "November"
            case 11: 
                    return "December"
            default: 
                    return 'Nothing here.'

        }
    }


    useEffect(()=>{
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString())
        }, 1000);
    }, [])

    const onClear = () => {
            setData([])
    }


    return(
        <NavbarContainer>
            <Title>To Do List</Title>
            <DateContainer>
                <Datee><DateeBold>Date:</DateeBold> {new Date().getDate()}.{new Date().getMonth() < 10 ? '0' + new Date().getMonth() : new Date().getMonth() }.{new Date().getFullYear()}, {getDaysOfTheWeek()}</Datee>
                <Datee><DateeBold>Time:</DateeBold> {clock} </Datee>
            </DateContainer>
            <DateContainer>
                <Tasks>{data.length} Tasks</Tasks>
                <ClearAll onClick={onClear}>Clear List</ClearAll>
                
            </DateContainer>
            
        </NavbarContainer>
    )
}

export default Navbar