<template>
  <div id="app">
    <tasks-day-form></tasks-day-form>
    <p>Welcome to Your Tasks For Today</p>
  </div>
</template>

<script>
import TasksDayForm from '@/components/TasksDayForm';

export default {
  name: 'app',
  components: {
    'tasks-day-form': TasksDayForm

  }
}
</script>

<style>
#app {
  background-color: blue;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
