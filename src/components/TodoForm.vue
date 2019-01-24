<template>

    <!-- form group -->
    <div class="row">
        <div class="col-md-6">
            <form>
                <div class="form-group">
                    <label>Todo<sup><strong>*</strong></sup></label>
                    <input @focus="touched = true" :class="{ 'error' : item.title === '' }" class="form-control" placeholder="Title of you Todo" type="text" v-model="item.title">
                </div>
                <div v-if="item.title === '' && touched" class="alert alert-info">
                    <p><strong>Info:</strong>This field is required!</p>
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <select class="form-control" name="priority" v-model="item.priority">
                        <option>High</option>
                        <option>Normal</option>
                        <option>Low</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" placeholder="Description of you Todo" name="todo" rows="5" cols="80" v-model="item.todo"></textarea>
                </div>
                <div class="form-group">
                    <button :disabled="item.title === ''" v-on:submit.prevent class="btn btn-primary" type="button" name="add" @click="add()">add</button>&nbsp;
                    <button :disabled="item.title === ''" v-on:submit.prevent class="btn btn-secondary" type="button" name="cancle" @click="cancle()">cancle</button>
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

                            <span :class="{ 'badge badge-danger' : element.priority === 'High', 'badge badge-success' : element.priority === 'Normal', 'badge badge-info' : element.priority === 'Low' }">{{ element.priority }}</span>
                            <h3 :class="{ 'done' : element.addDone }"><strong>{{ element.title }}</strong></h3>
                            <p>{{ element.todo }}</p>
                        </div>
                        <div class="col-md-4">
                            <button @click="element.addDone = !element.addDone" class="btn btn-success" type="button">{{ element.addDone ? 'undone' : 'done' }}</button>&nbsp;
                            <button @click="deleteItem(index)" class="btn btn-danger" type="button" name="delete">x</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>

export default {
    
    name: 'TodoForm',
    
    data() {
        
        return {
            entry : [],
            touched: false,
            // DataObj storing content of entry array
            item : {
                title : '',
                priority: 'Normal',
                todo : '',
                addDone : false
            }
        }
    },
    methods: {
        /**
        * @name add()
        * @desc adding a new item to the entry array
        */
        add() {
            this.entry.push(this.item);
            this.item = { title : '', priority: 'Normal', todo : '', addDone : false };
            this.touched = false;
        },

        /**
        * @name cancle()
        * @desc clears all input fields
        */
        cancle() {
            this.item = { title : '', priority: 'Normal', todo : '', addDone : false };
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
}

</script>

<style scoped lang="scss">
.done {
    text-decoration: line-through;
}

.error {
    border: 1px solid rgb( 255, 0, 0 );
}

</style>
