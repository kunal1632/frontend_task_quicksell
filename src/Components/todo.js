import React from 'react';
import "./todo.css"

const Todo = ({ ticket }) => {

    if (!ticket) {
    return <div>No ticket data available</div>;
  }
  const { id, title, user, status, priority ,tag} = ticket;

  return (
    <div className="ticket-todo">
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{tag}</p>
      
    </div>
  );
};

export default Todo;
