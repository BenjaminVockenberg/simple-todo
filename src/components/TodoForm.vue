<template>
    <!-- form group -->
    <div class="columns">
        <div class="column">
            <form>
                <div class="field">
                    <label class="label">Todo
                        <sup class="control">
                            <strong>*</strong>
                        </sup>
                    </label>
                    <div class="control">
                        <input
                        :class="{ 'error' : item.title === '' }"
                        v-model="item.title"
                        class="input"
                        placeholder="Title of you Todo"
                        type="text"
                        @focus="touched = true"
                        >
                    </div>
                    
            </div>
            <div v-if="item.title === '' && touched" class="notification is-primary">
                <p>
                    <strong>Info:</strong>This field is required!
                </p>
            </div>
            <div class="field">
                <label class="label">Priority</label>
                <div class="control">
                    <div class="select">
                        <select v-model="item.priority" name="priority">
                            <option>High</option>
                            <option>Normal</option>
                            <option>Low</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea
                    v-model="item.todo"
                    class="textarea"
                    placeholder="Description of you Todo"
                    name="todo"
                    rows="5"
                    ols="80"
                    />
                </div>
                
            </div>
            <div class="field">
                <div class="control">
                    <a class="button is-primary"
                    :disabled="item.title === ''"
                    type="button"
                    name="add"
                    @submit.prevent
                    @click="add()"
                    >
                        add
                    </a>&nbsp;
                
                
                    <a
                        :disabled="item.title === ''"
                        class="button"
                        type="button"
                        name="cancle"
                        @submit.prevent
                        @click="cancle()"
                    >
                        cancle
                    </a>
                </div>
            </div>
        </form>
    </div>

    <!-- Todo group -->
    <div class="column">
        <!-- Component TodoTitle -->
        <TodoTitle msg="Hallo Leute"/>
        <div v-if="entry.length < 1" class="notification is-warning">
            <p>
                <strong>Hinweis:</strong> Keine Daten vorhanden!
            </p>
        </div>

        <div class="box" :class="{ 'done' : element.addDone }" v-for="(element, index) in entry" :key="index">
            <article class="media">
                <div class="media-left">
                    <span class="tag is-info is-large" :class="{ 'tag is-danger is-large' : element.priority === 'High', 'tag is-success is-large' : element.priority === 'Normal', 'tag is-info is-large' : element.priority === 'Low' }">{{ element.priority }}</span>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ element.title }}</strong> 
                            <br>
                            {{ element.todo }}
                        </p>
                    </div>
                    <nav class="level">
                        <div class="level-left">
                            <p class="buttons">                                
                                <a class="button is-success" @click="element.addDone = !element.addDone">
                                    <span class="icon is-small">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span>{{ element.addDone ? 'undone' : 'done' }}</span>
                                </a>
                                <a class="button is-danger is-outlined" @click="deleteItem(index)">
                                    <span>Delete</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-times"></i>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </nav>
                </div>
            </article>
        </div>

        
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
    opacity: 0.5;
}

.error {
    border: 1px solid rgb(255, 0, 0);
}
</style>
