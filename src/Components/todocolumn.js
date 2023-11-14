import React from 'react';
import Todo from './todo';

const Todocolumn = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <Todo key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Todocolumn;
