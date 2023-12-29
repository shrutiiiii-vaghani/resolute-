import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const { id, title, completed } = task;

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

 
  const handleDoubleClick = () => {
    const newTitle = prompt('Enter new title:', title);
    if (newTitle && newTitle.trim() !== '') {
      onEdit(id, newTitle.trim());
    }
  };

  return (
  <div style={{margin:"10px"}}>
      <li className={completed ? 'completed' : ''} style={{listStyle:"none"}}>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} style={{marginRight:"5px"}}/>
      <span onDoubleClick={handleDoubleClick}>{title}</span>
      <button onClick={handleDelete} style={{marginLeft:"15px",padding:"6px 8px",fontSize:"8px"}} className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>

    </li>
  </div>
  );
};

export default Task;
