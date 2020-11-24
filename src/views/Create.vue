<template>
    <div class="create">
        <h1>Create a new ToDo</h1>
        <form id="form" action="">
                <label>ToDo Title</label>
                <input type="text" v-model="list.title" placeholder="What to do for project..." required="required">
                <label>ToDo Category</label>
                <input type="text" v-model="list.category" placeholder="School..." required="required">
                <label>ToDo List</label>
                <input class="question_input" type="text" v-model="newPoint" placeholder="Read the article..." required="required">
                <ul class="point_list">
                <li class="point_list" v-for="po in list.point" :key="po">{{po}}</li>
                </ul>    
                <button type="button" class="save" v-on:click="savePoint">Add a task</button> 
                <button type="button" v-on:click="createPost">Create a List</button> 
        </form>
    </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
    name: "Create",
    data() {
        return {
            list: {
                title : "",
                category:"",
                point: []
            },
        }
    },
    methods:{
        createPost() {
            postRef.add(this.list)
            this.$router.push('/')
        },
        savePoint() {
            this.list.point.push(this.newPoint);
            this.newPoint = "";
        }
    }

}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10% auto 0 auto;
    align-items: center;
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    opacity: 95%;
}

button {
    border: none;
    background-color: #FEAD34;
    color: white;
    padding: 10px;
    border-radius: 12px;
    font-size: 20px;
    margin-top: 30px;
    width: 50%;
    outline: none;
}

input {
    border: none;
    height: 20px;
    border-radius: 12px;
    padding: 10px;
    outline: none;
    width: 100%;
    margin: 5px;
    font-size: 14px;
    background-color: #ececec;
}

label {
    font-size: 20px;
    align-self: flex-start;
    margin-top: 20px;
    font-weight: 600;
}

.save {
    background-color: rgb(56, 56, 56);
    width: 40%;
}

.point_list {
    width: 100%;
}
</style>