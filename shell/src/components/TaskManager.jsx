import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState(["Learn React"]);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

export default TaskManager;