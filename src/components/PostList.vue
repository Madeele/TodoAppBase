<template>
    <div>
        <h2>Your Lists</h2>
        <div class="flex-container">
            <article v-for="list in lists" :key="list.id">
                <div class="top_title">
                <h3>{{list.title}}</h3>
                <h4 class="category" id="category" >{{list.category}}</h4>
               </div>
                <ul> 
                    <li v-for="po in list.point" :key="po">{{po}}</li>
                </ul>
                <router-link :to="{ name: 'Update', params: { list: list } }">
        <button class="update">Update</button>
      </router-link>
      <button class="delete" v-on:click="deletePost(list.id)">Delete</button>
            </article>
        </div>
    </div>
</template>

<script>
import {postRef} from "../firebase-db";
export default {
    data(){
        return {
            lists : []
        }
    },
    methods: {
    deletePost(id) {
      postRef.doc(id).delete();
    },

    changeColors() {
        let category = this.list.category;
        
        if (category === "School"){
            document.querySelector(".category").style.color = "red"
        }
    },
  },
    firestore: {
        lists: postRef
    }
}

</script>

<style>
.flex-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: auto;
}

article {
    width: 80%;
    height: auto;
    padding: 10px;
    background-color: white;
    border-radius: 12px;
    margin: 5px auto;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.28);
    opacity: 95%;
}

li {
    text-align: left;
    width: 60%;
    font-size: 18px;
}

h3 {
    font-weight: 600;
    text-align: left;
    width: 60%;
}

h4 {
    font-weight: 400;

}

.top_title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.delete {
    background-color: rgb(216, 99, 99);
    width: 30%;;
    width: 30%;
    margin: 10px;
    font-size: 18px;
    border: none; 
    color: white;
    padding: 10px;
    border-radius: 12px;
    outline: none;
}

.update{
    background-color: rgb(99, 120, 216);
    width: 30%;;
    width: 30%;
    margin: 10px;
    font-size: 18px;
    border: none; 
    color: white;
    padding: 10px;
    border-radius: 12px;
    outline: none;
}

.category {
    display: block;
}

</style>