<template>
  <form @submit.prevent="handleSubmitForm">
  <div class="form-group">
    <label for="name">name</label>
    <input type="name" class="form-control" id="name" v-model="users.name" style="border:1px solid black">
     <p   v-for="error in errors" :key="error.id">
        <span style="color:red">{{error.nameError}}</span>
     </p>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input class="form-control" v-model="users.email" id="email"  style="border:1px solid black">
    <p color="red" v-for="error in errors" :key="error.id">
       <span style="color:red">{{error.emailError}}</span>
     </p>
  </div>
  <div class="form-group">
    <label for="mobile">Mobile</label>
    <input type="mobile" class="form-control" v-model="users.mobile" id="mobile"  style="border:1px solid black">
    <p color="red" v-for="error in errors" :key="error.id">
       <span style="color:red">{{error.mobileError}}</span>
     </p>
  </div>
  <div class="form-group">
    <label for="city">city</label>
    <input type="text" class="form-control" v-model="users.city" id="city"  style="border:1px solid black">
    <p color="red" v-for="error in errors" :key="error.id">
       <span style="color:red">{{error.cityError}}</span>
     </p>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
</template>
<script>
// @ is an alias to /src
const axios = require('axios');
 export default {
        data() {
            return {
                users: {
                   name: '',
                   email: '',
                   mobile: '',
                   city:''
                },
                errors:[]
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:9090/store';
                axios.post(apiURL, this.users)
                .then(() => {
                  this.$router.push('/about');
                  this.users = {
                    name: '',
                    email: '',
                    mobile: '',
                    city: ''
                  }
                }).catch(error => {
                    this.errors = error.response.data
                });
            }
        }
    }
</script>

