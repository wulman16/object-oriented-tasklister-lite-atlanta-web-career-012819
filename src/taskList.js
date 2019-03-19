class TaskList {
  constructor() {
    this.all = []
  }
  
  get allTasks() {
    return this.all
  }

  render() {
    document.querySelector('ul').remove()
    const ul = document.createElement('ul')
    this.all.forEach(task => {
      const li = task.render()
      ul.appendChild(li)
    })
    return ul
  }
}