const toDoList = {
    tasks: [],
    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            task,
            completed: false,
        });
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id!== id);
    },
    toggleTaskCompletion(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return {...task, completed:!task.completed };
            }
            return task;
        });
    }
}

const addTask = () => 
{
    // alert('Add task');
    const taskInput = document.getElementById('taskInput');
    alert(taskInput.value);
    const task = taskInput.value.trim();
    if (task) {
        toDoList.addTask(task);
        taskInput.value = '';
        renderTasks();
    }
}

const deleteTask= (id) => {
    toDoList.deleteTask(id);
    renderTasks();
}
const renderTasks = ()=> 
{
    alert('Hi');
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';
    
    toDoList.tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.task;
        taskElement.classList.add('task');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.addEventListener('click', () => {
            toDoList.toggleTaskCompletion(task.id);
            renderTasks();
        });
        tasksList.appendChild(taskElement);
    });
}
