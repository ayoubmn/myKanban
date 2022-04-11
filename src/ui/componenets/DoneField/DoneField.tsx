import React from 'react'
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
      {tickets.map((t)=>(
      
        <Ticket_box ticket={t} />
      
      ))}

    </div>
  )
}


export default DoneField
