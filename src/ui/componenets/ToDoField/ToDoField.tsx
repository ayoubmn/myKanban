import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Ticket } from '../../model';
import Ticket_box from '../Ticket_box';

interface Props{
  tickets:Ticket[];
  setTickets:React.Dispatch<React.SetStateAction<Ticket[]>>
}

const ToDoField = ({tickets,setTickets}:Props) => {
  return (
    <div className='todo_field'>
      <div className='field_header'>
      To Do
      </div>
      <Droppable droppableId='todo'>
        {(provided)=>( <div ref={provided.innerRef} {...provided.droppableProps} >
        {tickets.map((t,index)=>(
        
          <Ticket_box ticket={t} index={index} />
        
        ))}
        {provided.placeholder}
        </div>
      )}
      </Droppable>
    </div>
  )
}

export default ToDoField
