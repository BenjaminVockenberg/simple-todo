<template>
    <div id="app">
        <div class="container">

            <TodoTitle msg="Hallo Leute" />

            <TodoForm />


        </div>
    </div>
</template>

<script>

import TodoTitle from './components/TodoTitle.vue';
import TodoForm from './components/TodoForm.vue';

export default {
    name: 'app',
    components: {
        TodoTitle,
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
