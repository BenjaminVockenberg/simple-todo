<template>

    <!-- Title Bar -->
    <div class="columns">
        <div class="column">
            <h1 class="title"
            v-if="!edit" 
            @click="toggleEdit()">{{ msg }}</h1>
            <input 
            v-if="edit" 
            v-model="msg" 
            class="form-control" 
            type="text" 
            @keyup.enter="toggleEdit()">
        </div>
    </div>

</template>

<script>

export default {
    name: 'TodoTitle',

    props: {
        msg: {
            type: String,
            default: 'Another ToDo-List'
        }
    },

    data() {
        return {
            edit : false
        }
    },

    methods: {
        /**
        * @name toggleEdit()
        * @desc toggle between edit mode and show mode
        */
        toggleEdit() {
            this.edit = !this.edit;
        }
    },
    
}
</script>
