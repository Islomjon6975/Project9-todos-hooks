import { InputContainer, Input, Add } from "./styled"
import { useContext } from "react"
import { ToDoListContext } from "./context"
import { useState } from "react";

const Footer = () => {

    const [data, setData] = useContext(ToDoListContext);
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onAdd = () => {
        if(input.length !== 0) {
            setData((prev) => [...prev, {id: data.length + 1, task: input, hour: new Date().getHours(), minut: new Date().getMinutes()}]
            )
            setInput('')
        }
    }

    return(
        <div>
            <InputContainer>
                <Input 
                    placeholder="Add a Todo"
                    onChange={(e)=>onChange(e)}
                    value={input}
                />
                <Add onClick={onAdd}>Add</Add>
            </InputContainer>
        </div>
    )
}

export default Footer