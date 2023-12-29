import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 

  const filteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'uncompleted':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };


  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
   <body>
    <div className='middle'>
    <div className="container">
      <h1 className='p-2'>Task Manager</h1>
   
      <div>
  <button onClick={() => setFilter('all')} type="button" class="btn btn-primary me-2">All Tasks</button>
  <button onClick={() => setFilter('completed')} type="button" class="btn btn-primary me-2">Completed Tasks</button>
  <button onClick={() => setFilter('uncompleted')} type="button" class="btn btn-primary">Uncompleted Tasks</button>
</div>
      <TaskList
        tasks={filteredTasks()} 
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskInput = e.target.elements.taskInput;
          addTask(taskInput.value);
          taskInput.value = '';
        }}
      >
           <input type="text" name="taskInput" placeholder="Add a new task" style={{border:"1px solid black",borderRadius:"5px",borderTopRightRadius:"0",borderBottomRightRadius:"0"}} required />
        <button type="submit" style={{border:"1px solid black",borderRadius:"5px",padding:"1px 8px",borderTopLeftRadius:"0",borderBottomLeftRadius:"0"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>  </button>
      </form>
    </div>
    </div>
   </body>
  );
};

export default App;
