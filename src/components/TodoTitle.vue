<template>

  <!-- Title Bar -->
  <div class="row">
    <div class="col-sm-12">
      <h1 
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
            default: 'hi'
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
