const baseURL = 'http://localhost:3000/api/tasks/'

export default {
  getTasks(){
    return fetch(baseURL)
    .then(res => res.json())
  },
}
