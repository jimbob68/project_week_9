<template lang="html">

  <form>
    <ul>
      <li v-for="task in tasks">{{ task }}</li>
    </ul>
    <label for="new-task">Add a new Task:</label>
    <input id="new-task"  type="text" v-model="newTask">
    <input type="submit"  value="save new task">
    <button v-on:click="updateTask('Brush Teeth')">Update Task:</button>
  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import TasksService from '@/services/TasksService.js'

export default {
  name: 'tasks-day-form',
  data(){
    return {
      tasks: ["task1", "task2", "task3"],
      newTask: ""

    }
  },
  methods: {

    updateTask: function(task) {
      this.task = "";

    }
  }
}
</script>

<style lang="css" scoped>
</style>
