<template>
    <!-- form group -->
    <div class="row">
        <div class="col-md-6">
            <form>
                <div class="form-group">
                    <label>Todo
                    <sup>
                    <strong>*</strong>
                    </sup>
                </label>
                <input
                    :class="{ 'error' : item.title === '' }"
                    v-model="item.title"
                    class="form-control"
                    placeholder="Title of you Todo"
                    type="text"
                    @focus="touched = true"
                >
            </div>
            <div v-if="item.title === '' && touched" class="alert alert-info">
                <p>
                    <strong>Info:</strong>This field is required!
                </p>
            </div>
            <div class="form-group">
                <label>Priority</label>
                <select v-model="item.priority" class="form-control" name="priority">
                    <option>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                </select>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea
                    v-model="item.todo"
                    class="form-control"
                    placeholder="Description of you Todo"
                    name="todo"
                    rows="5"
                    ols="80"
                />
            </div>
            <div class="form-group">
                <button
                    :disabled="item.title === ''"
                    class="btn btn-primary"
                    type="button"
                    name="add"
                    @submit.prevent
                    @click="add()"
                >add</button>&nbsp;
                <button
                    :disabled="item.title === ''"
                    class="btn btn-secondary"
                    type="button"
                    name="cancle"
                    @submit.prevent
                    @click="cancle()"
                >cancle</button>
            </div>
        </form>
    </div>

    <!-- Todo group -->
    <div class="col-md-6">
        <!-- Component TodoTitle -->
        <TodoTitle msg="Hallo Leute"/>
        <div v-if="entry.length < 1" class="alert alert-warning">
            <p>
                <strong>Hinweis:</strong> Keine Daten vorhanden!
            </p>
        </div>
        <ul class="list-group">
            <li v-for="(element, index) in entry" :key="index" class="list-group-item">
                <div class="row">
                    <div class="col-md-8">
                        <span
                            :class="{ 'badge badge-danger' : element.priority === 'High', 'badge badge-success' : element.priority === 'Normal', 'badge badge-info' : element.priority === 'Low' }"
                        >
                            {{ element.priority }}
                        </span>
                        <h3 :class="{ 'done' : element.addDone }">
                            <strong>{{ element.title }}</strong>
                        </h3>
                        <p>{{ element.todo }}</p>
                    </div>
                    <div class="col-md-4">
                        <button
                            class="btn btn-success"
                            type="button"
                            @click="element.addDone = !element.addDone"
                        >
                            {{ element.addDone ? 'undone' : 'done' }}
                        </button>&nbsp;
                        <button
                            class="btn btn-danger"
                            type="button"
                            name="delete"
                            @click="deleteItem(index)"
                        >
                            x
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
//! importing the title into the List Tab itself
import TodoTitle from "./TodoTitle.vue";

export default {
  name: "TodoForm",

  components: {
    TodoTitle
  },

  data() {
    return {
      entry: [],
      touched: false,
      // DataObj storing content of entry array
      item: {
        title: "",
        priority: "Normal",
        todo: "",
        addDone: false
      }
    };
  },
  methods: {
    /**
     * @name add()
     * @desc adding a new item to the entry array
     */
    add() {
      this.entry.push(this.item);
      this.item = { title: "", priority: "Normal", todo: "", addDone: false };
      this.touched = false;
    },

    /**
     * @name cancle()
     * @desc clears all input fields
     */
    cancle() {
      this.item = { title: "", priority: "Normal", todo: "", addDone: false };
      this.touched = false;
    },

    /**
     * @name deleteItem(index)
     * @param index { number }
     * @desc deletes a specific item from the entries array
     */
    deleteItem(index) {
      this.entry.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.done {
  text-decoration: line-through;
}

.error {
  border: 1px solid rgb(255, 0, 0);
}
</style>
