import React, { useState } from 'react';
import TaskForm from './Taskform.jsx';
import TaskList from './Tasklist.jsx';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Task Management</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList 
                tasks={tasks} 
                onToggleCompletion={toggleTaskCompletion} 
                onDeleteTask={deleteTask} 
            />
        </div>
    );
};

export default Tasks;
