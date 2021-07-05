<template>
  <div class="about">
    <v-col cols="12" sm="6" md="4">
         <li v-for="list in lists" :key="list.id">
             {{list.name}}
             {{list.email}}
             {{list.mobile}}
             {{list.city}}
             {{list._id}}
             <a style="cursor:pointer; color:blue" @click="deleteUser(list._id)">delete</a>
         </li>
    </v-col>
  </div>
</template>

<script>
// @ is an alias to /src
// const axios = require('axios');
import UsersService from "../services/UserService";
//  import axios from "axios"
export default {
  name: "about",
  data() {
    // NEW - initialize the event object
    return {
      lists:[],
    }
  },
  created() {
    this.getUserData();
  },
  // NEW
  methods: {
    async getUserData() {
        this.loading = true
        UsersService.getUsers(this.$route)
        .then(
          (users => {
            this.$set(this, "lists", users);
          }).bind(this)
        );
    },
    async deleteUser(id){
      UsersService.getSingleUsers(id)
     .then(() => console.log("success"))
     .catch(error => console.log(error));
    }
  },    
};
</script>