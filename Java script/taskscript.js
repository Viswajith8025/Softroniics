// Task class
class Task {
    constructor(taskId, taskName, taskDescription, dueDate) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
    }
}

// Task Manager class
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add task
    addTask(taskId, taskName, taskDescription, dueDate) {
        const task = new Task(taskId, taskName, taskDescription, dueDate);
        this.tasks.push(task);
    }

    // View all tasks
    viewTasks() {
        const tasksHtml = this.tasks.map((task, index) => {
            return `
                <div>
                    <h2>Task ${index + 1}</h2>
                    <p>ID: ${task.taskId}</p>
                    <p>Name: ${task.taskName}</p>
                    <p>Description: ${task.taskDescription}</p>
                    <p>Due Date: ${task.dueDate}</p>
                </div>
            `;
        }).join('');
        document.getElementById('tasks').innerHTML = tasksHtml;
    }

    // Sort tasks by due date
    sortTasks() {
        this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        this.viewTasks();
    }

    // Search tasks by keyword
    searchTasks(keyword) {
        const searchedTasks = this.tasks.filter(task => {
            return task.taskName.toLowerCase().includes(keyword.toLowerCase()) ||
                task.taskDescription.toLowerCase().includes(keyword.toLowerCase());
        });
        const tasksHtml = searchedTasks.map((task, index) => {
            return `
                <div>
                    <h2>Task ${index + 1}</h2>
                    <p>ID: ${task.taskId}</p>
                    <p>Name: ${task.taskName}</p>
                    <p>Description: ${task.taskDescription}</p>
                    <p>Due Date: ${task.dueDate}</p>
                </div>
            `;
        }).join('');
        document.getElementById('tasks').innerHTML = tasksHtml;
    }
}

// Initialize Task Manager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask(101, "Write Report", "Complete the monthly report", "2024-08-10");
taskManager.addTask(102, "Meeting", "Project kickoff meeting", "2024-08-09");
taskManager.addTask(103, "Code Review", "Review the new feature code", "2024-08-11");

// Button event handlers
function addTask() {
    const taskId = prompt("Enter task ID:");
    const taskName = prompt("Enter task name:");
    const taskDescription = prompt("Enter task description:");
    const dueDate = prompt("Enter due date (YYYY-MM-DD):");
    taskManager.addTask(taskId, taskName, taskDescription, dueDate);
    taskManager.viewTasks();
}

function viewTasks() {
    taskManager.viewTasks();
}

function sortTasks() {
    taskManager.sortTasks();
}

function searchTasks() {
    const keyword = prompt("Enter search keyword:");
    taskManager.searchTasks(keyword);
}

function exit() {
    window.close();
}