import React from 'react'
import { Ticket } from '../../model';
import Ticket_box from '../Ticket_box';

interface Props{
  tickets:Ticket[];
  setTickets:React.Dispatch<React.SetStateAction<Ticket[]>>
}

const InProgressField = ({tickets,setTickets}:Props) => {
  return (
    <div className='inprogres_field'>
      <div className='field_header'>
      In Progress
      </div>
      {tickets.map((t)=>(
      
        <Ticket_box ticket={t} />
      
      ))}

    </div>
  )
}


export default InProgressField
