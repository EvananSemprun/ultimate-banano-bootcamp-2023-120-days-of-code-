import React from "react";

const Task = (props) => {
  return (
    <div>
      <p>{props.task.title}</p>
      <button onClick={() => props.onDelete(props.task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;