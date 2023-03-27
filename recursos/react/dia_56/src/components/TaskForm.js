import React, { useState } from "react";

const TaskForm = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    props.onAdd({ id: Date.now(), title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añade una tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
};

export default TaskForm;