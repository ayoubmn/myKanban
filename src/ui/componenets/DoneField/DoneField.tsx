import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Ticket } from '../../model';
import Ticket_box from '../Ticket_box';

interface Props{
  tickets:Ticket[];
  setTickets:React.Dispatch<React.SetStateAction<Ticket[]>>
}

const DoneField = ({tickets,setTickets}:Props) => {
  return (
    <div className='done_field'>
      <div className='field_header'>
      Done
      </div>
      <Droppable droppableId='done'>
        {(provided)=>( 
        <div ref={provided.innerRef} {...provided.droppableProps} >
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


export default DoneField
