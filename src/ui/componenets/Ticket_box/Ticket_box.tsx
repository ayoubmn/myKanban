import React from 'react'
import { Ticket } from '../../model'
interface Props{
  ticket:Ticket
}

const Ticket_box = ({ticket}:Props) => {
  return (
    <div className='ticket_box'>
      {ticket.text}
    </div>
  )
}

export default Ticket_box
