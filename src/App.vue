<template>
    <div id="app">
        <TodoForm msg="Unbedingt erledigen!" />
    </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'

export default {
    name: 'app',
    components: {
        TodoForm
    }
}
</script>

<style lang="scss">

@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

#app {
    font-family: sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
