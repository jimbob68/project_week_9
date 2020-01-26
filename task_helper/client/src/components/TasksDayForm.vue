<template lang="html">
  <form class="" >

  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import TasksService from '@/services/TasksService.js'

export default {
  name: 'tasks-day-form',
  data(){
    return {
      tasks: []
    }
  }
  // methods: {
  //   addTask(task){
  //     task.preventDefault()
  //     const task = {
  //       name: this.name,
  //       timeOfTask: {
  //         morning: this.timeOfDay,
  //         afternoon: this.timeOfDay,
  //         evening: this.timeOfDay
  //       }
  //     }
  //   }
  // }
}
</script>

<style lang="css" scoped>
</style>
