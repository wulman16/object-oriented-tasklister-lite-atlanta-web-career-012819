const taskList = new TaskList();
const listContainer = document.getElementById("list");
const renderApp = () => (listContainer.appendChild(taskList.render()));

document.addEventListener("DOMContentLoaded", () => {

  const ul = document.createElement('ul')
  listContainer.appendChild(ul)
 
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = e.target.elements["new-task-description"].value
    const newTask = new TaskListItem(taskDescription)
    taskList.all.push(newTask)
    e.target.reset()
    renderApp()
  })
})

function handleDelete(e) {
  const taskDescription = e.target.parentNode.textContent.slice(0, -1)
  taskList.all = taskList.all.filter(task => task.description !== taskDescription)
  renderApp()
}