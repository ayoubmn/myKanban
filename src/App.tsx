import React, { useState } from 'react';
import { toEditorSettings } from 'typescript';
import './App.css';
import DoneField from './ui/componenets/DoneField';
import InProgressField from './ui/componenets/InProgressField';
import InputField from './ui/componenets/InputField';
import ToDoField from './ui/componenets/ToDoField';
import { Ticket } from './ui/model';



export const App:React.FC = () => {

  const [ticket, setTicket] = useState<string>("")
  const [tickets, setTickets] = useState<Ticket[]>([])
  
  const handleAdd=(e:any)=>{
    e.preventDefault()
    if(ticket){
      setTickets([...tickets,{id:Date.now(),text:ticket,isInprogres:false,isDone:false}])
      setTicket("");
    }
  };
  
    return (
        <div className="App">
          <span className='heading'>MyKanban</span>
          <InputField todo={ticket} setTodo={setTicket} handleAdd={handleAdd} />
          <div className='ticket_fields'>
            <ToDoField tickets={tickets} setTickets={setTickets} />
            <InProgressField tickets={tickets} setTickets={setTickets} />
            <DoneField tickets={tickets} setTickets={setTickets} />
          </div>
        
        </div>
    );
}