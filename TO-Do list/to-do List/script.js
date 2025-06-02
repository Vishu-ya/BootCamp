let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'all';

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    if (filter === 'active' && task.completed) return;
    if (filter === 'completed' && !task.completed) return;

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    if (task.completed) taskSpan.classList.add('completed');
    taskSpan.onclick = () => toggleComplete(index);

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('task-input');
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = '';
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function setFilter(newFilter) {
  filter = newFilter;
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase() === filter) {
      btn.classList.add('active');
    }
  });
  renderTasks();
}

renderTasks();
