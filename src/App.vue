<template>
    <section id="app" class="section">
        <div class="container">

        <!-- Component TodoForm -->
        <TodoForm />

        </div>
    </section>
</template>

<script>

//! importing components from the components folder
import TodoForm from './components/TodoForm.vue';

export default {
    name: 'App',
    components: {        
        TodoForm
    }
}
</script>

<style lang="scss">

#app {
    font-family: sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
