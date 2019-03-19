class TaskListItem {
  constructor(description) {
    this.description = description
  }

  render() {
    const li = document.createElement('li')
    li.innerHTML = this.description
    const del = document.createElement('button')
    del.textContent = 'X'
    del.dataset.description = this.description
    del.addEventListener('click', handleDelete)
    li.appendChild(del)
    return li
  }

}
