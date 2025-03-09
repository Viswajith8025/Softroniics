import React from 'react';

const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    <span onClick={() => onToggleCompletion(task.id)}>{task.text}</span>
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
