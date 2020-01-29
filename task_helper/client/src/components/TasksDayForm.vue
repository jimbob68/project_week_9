<template lang="html">
  <form class="main-container" v-on:submit.prevent="handleSubmit">
    <ul>
      <li v-for="(task, index) in tasks" :class="task.completed ? 'completed' : 'not-completed'">
          <span>{{ task.description }}</span>
          <span v-if="task.completed">Task Complete!</span>
          <button type="button" name="completed"></button>
          <input type="text" id="completed-task">
            <button type="button" v-if="!task.completed" v-on:click="taskCompleted(index)">This Task Next!</button>
      </li>
    </ul>

    <label for="new-task">New Task:</label>
      <input id="new-task"  type="text" v-model="newTask" value="newTask">

      <input type="submit"  value="save new task">
      <button v-on:click="updateTask('Brush Teeth')">Update Task:</button>

      <button v-on:click="handleDelete(task._id)">Delete Task</button>


  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import TasksService from '@/services/TasksService.js'

export default {
  name: 'tasks-day-form',
  data(){
    return {
      tasks: [],
      newTask: "",
      description: "",
      completed: false
    }
  },
  mounted(){
    this.fetchData();

  },
  methods: {
    handleSubmit(event){

      event.preventDefault();
      const payload = {
        tasks: this.task,
        newTask: this.newTask,
        description: "",
        completed: false
      }
      TasksService.postTask(payload)
      .then(task => {
        eventBus.$emit('task-added', this.task.push(tasks));
      })

    },

    fetchData() {
      TasksService.getTasks()
      .then(tasks => this.tasks = tasks)
    },

    handleDelete(id){
      TasksService.deleteTask(id)
      .then(response => eventBus.$emit('task-deleted', id));
    },
    updateTask(task) {
      this.task = "";
    },
    saveNewTask() {
      this.tasks.push({
        description: this.newTask,
        completed: false
    })
      this.newTask = ""
  },

    taskCompleted(index) {
      this.tasks[index].completed = true;
    },
  }
}

</script>

<style lang="css" scoped>
.main-container {

  }
</style>
