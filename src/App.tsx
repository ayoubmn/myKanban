import React, { useState } from 'react';
import { toEditorSettings } from 'typescript';
import './App.css';
import DoneField from './ui/componenets/DoneField';
import InProgressField from './ui/componenets/InProgressField';
import InputField from './ui/componenets/InputField';
import ToDoField from './ui/componenets/ToDoField';
import { Ticket } from './ui/model';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'


export const App:React.FC = () => {

  const [ticket, setTicket] = useState<string>("")
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [progTickets, setProgTickets] = useState<Ticket[]>([])
  const [doneTickets, setDoneTickets] = useState<Ticket[]>([])
  
  const handleAdd=(e:any)=>{
    e.preventDefault()
    if(ticket){
      setTickets([...tickets,{id:Date.now(),text:ticket,isInprogres:false,isDone:false}])
      setTicket("");
    }

  };
  
  const onDragEnd=(result:DropResult)=>{
      const {source,destination}=result;
      if(!destination) return;
      if(destination.droppableId===source.droppableId && destination.index===source.index) return;

      if(source.droppableId==="todo"&& destination.droppableId==="progress"){
        setProgTickets([...progTickets,tickets[source.index]])
        tickets.splice(source.index,1)
      }
      if(source.droppableId==="progress"&& destination.droppableId==="todo"){
        setTickets([...tickets,progTickets[source.index]])
        progTickets.splice(source.index,1)
      }
      
      if(source.droppableId==="progress"&& destination.droppableId==="done"){
        setDoneTickets([...doneTickets,progTickets[source.index]])
        progTickets.splice(source.index,1)
      }
      if(source.droppableId==="done"&& destination.droppableId==="progress"){
        setProgTickets([...progTickets,doneTickets[source.index]])
        doneTickets.splice(source.index,1)
      }
    }
    return (
        <div className="App">
          <span className='heading'>MyKanban</span>
          <InputField todo={ticket} setTodo={setTicket} handleAdd={handleAdd} />
          <DragDropContext onDragEnd={onDragEnd}>
            <div className='ticket_fields'>
              <ToDoField tickets={tickets} setTickets={setTickets} />
              <InProgressField tickets={progTickets} setTickets={setProgTickets} />
              <DoneField tickets={doneTickets} setTickets={setDoneTickets} />
            </div>
          </DragDropContext>
        
        </div>
    );
}