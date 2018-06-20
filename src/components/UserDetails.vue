

<template>

  <div class="container">
    <router-link to="/">Back</router-link>
      <p>{{user.first_name}}</p>
      <h1>{{user.last_name}}</h1>
      <p>{{user.Telephone}}</p>
      <span class="pull-right"><button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete user</button></span>
  </div>

</template>

<script>
export default {
   
  name: 'UserDetails',
  data() {
    return {
      user:{},
    
    }
  },
  methods:{
    fetchUser(id){
      this.$http.get('http://localhost:3000/getuser/'+id)
      .then(function(response){
        console.log(response.body)
        this.user=(response.body);
      });
  },
  deleteUser(id){
    this.$http.delete('http://localhost:3000/deleteuser/'+id)
    .then(function(response){
      this.$router.push({path: '/', query: {alert: 'User deleted'}})
    });
  }
},
  created: function(){
    this.fetchUser(this.$route.params.id);
  }
}
</script>

<style>

</style>
