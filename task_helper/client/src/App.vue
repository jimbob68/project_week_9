<template>
  <!-- requires html tags div, form etc to display javascript -->
  <div id="app">
  <!-- id identifies this div element allowing Vue to hook into the html to display what the user should see for css styling   -->
    <tasks-day-form></tasks-day-form>
    <!-- custom html tags are used to instansiate components-->
      <p>Welcome to Your Tasks For Today</p>
      <!-- paragraph html tags for written content -->
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
// importing event bus from main js to use within vue and to $emit and $on to transport data from components to component or app.vue.
import TasksDayForm from '@/components/TasksDayForm';
// import component file TasksDayForm into app.vue
import TasksService from '@/services/TasksService'
// import TasksService from services folder to allow get post update and delete

export default {
  name: 'app',
  // default name give to file enables hook for css etc.
  // data(){
  // where the programme's state is
  //   return {
  //     tasks: []
  //   }
  // },

  // methods: {
  //   fetchData() {
  //     TasksService.getTasks()
  //     .then(tasks => this.tasks = tasks);
  //   }
  // }

  mounted() {
    // eventBus.$on("task-added", task => this.tasks.push(task));

    eventBus.$on('task-deleted', id => {
      const index = this.tasks.findIndex(task => task._id === id)
      this.tasks.splice(index, 1)
    })
  },

  components: {
    'tasks-day-form': TasksDayForm
  }
}
</script>

<style>
#app {
  background-color: yellow;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
