<template>
  <div id="app">
    <div class="container">

      <!-- Component TodoTitle -->
      <TodoTitle msg="Hallo Leute" />

      <!-- Component TodoForm -->
      <TodoForm />

    </div>
  </div>
</template>

<script>

//! importing components from the components folder
import TodoTitle from './components/TodoTitle.vue';
import TodoForm from './components/TodoForm.vue';

export default {
    name: 'App',
    components: {
        TodoTitle,
        TodoForm
    }
}
</script>

<style lang="scss">

//! Importing Bootstrap from node_modules
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

#app {
    font-family: sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
