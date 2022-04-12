import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Ticket } from '../../model'
interface Props{
  ticket:Ticket
  index: number;

}

const Ticket_box = ({ticket,index}:Props) => {
  return (
    <Draggable draggableId={ticket.id.toString()} index={index}>
      {(provided)=>(    
      <div className='ticket_box' {...provided.draggableProps}{...provided.dragHandleProps}ref={provided.innerRef}>
      {ticket.text}
    </div>)}
    </Draggable>

  )
}

export default Ticket_box
