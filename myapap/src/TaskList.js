import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
