const baseURL = 'http://localhost:3000/api/tasks/'

export default {
  getTasks(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postTask(payload) {
    return fetch("http://localhost:3000/api/tasks/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
  },

  updateTask(task) {
    return fetch(baseURL + task._id, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  },

  deleteTask(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
