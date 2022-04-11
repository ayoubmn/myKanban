import React, { useRef } from 'react'
import '../styles.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:any)=>void;
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {

    const inputRef= useRef<HTMLInputElement>(null)

    return <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()
        }}>
            
        <input type="input" 
         ref={inputRef}
         value={todo}
         placeholder='add a ticket'  
         className='input_field'
         onChange={(e)=>setTodo(e.target.value)}
         />
        <button className='input_submit' type='submit'>Add</button>
    </form>
}

export default InputField
