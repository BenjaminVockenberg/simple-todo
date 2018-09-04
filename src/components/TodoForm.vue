<template>
  <div class="container">

      <TitleBar msg="Unbedingt erledigen!"/>

      <!-- form group -->
      <div class="row">
          <div class="col-md-6">
              <form>
                  <div class="form-group">
                      <label>Todo</label>
                      <input class="form-control" placeholder="Title of you Todo" type="text" name="titel" v-model="item.title">
                  </div>
                  <div class="form-group">
                      <label>Description</label>
                      <textarea class="form-control" placeholder="Description of you Todo" name="todo" rows="5" cols="80" v-model="item.todo"></textarea>
                  </div>
                  <div class="form-group">
                      <button class="btn btn-primary" type="button" name="add" @click="add()">add</button>&nbsp;
                      <button class="btn btn-secondary" type="button" name="add" @click="cancle()">cancle</button>
                  </div>
              </form>
          </div>

          <!-- Todo group -->
          <div class="col-md-6">
              <div v-if="entry.length < 1" class="alert alert-warning">
                  <p><strong>Hinweis:</strong> Keine Daten vorhanden!</p>
              </div>
              <ul class="list-group">
                  <li class="list-group-item" v-for="(element, index) in entry" v-bind:key="index">
                      <div class="row">
                          <div class="col-md-8">
                              <p :class="{ 'done' : element.addDone }"><strong>{{ element.title }}</strong>: {{ element.todo }}</p>
                          </div>
                          <div class="col-md-4">
                              <button @click="element.addDone = !element.addDone" class="btn btn-success" type="button" name="donoe">done</button>&nbsp;
                              <button @click="deleteItem(index)" class="btn btn-danger" type="button" name="delete">x</button>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>

  </div>
</template>

<script>

import TitleBar from './TitleBar.vue';

export default {
    name: 'TodoForm',
    data() {
        return {
            entry : [],
            item : {
                title : '',
                todo : '',
                addDone : false
            },

        }
    },
    methods: {
        add() {
            this.entry.push(this.item);
            this.item = { title : '', todo : '', addDone : false };
        },
        cancle() {
            this.item = { title : '', todo : '', addDone : false };
        },
        deleteItem(index) {
            this.entry.splice(index, 1);
        }
    },
    components : {
        TitleBar
    }
}
</script>

<style scoped lang="scss">
    .done {
        text-decoration: line-through;
    }
</style>
