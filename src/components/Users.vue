<template>
  <div class="container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
     <h1 class="page-header">Manage users</h1>
    <input class="form-control" placeholder="Enter last name" v-model="filterInput" />
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Telephone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filterBy(users, filterInput)">
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.Telephone}}</td>
          <td><router-link class="btn btn-default" v-bind:to="'/userdetails/'+user.id">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'users',
   data() {
    return {
      users:[],
      alert:'',
      filterInput:''
    }
  },
    methods: {
        fetchUsers(){
            this.$http.get('http://localhost:3000/getusers/')
                .then(function(response){
                    console.log(response.body);
                   this.users = (response.data);
                });
        },
        filterBy(list,value){
          return list.filter(function(user){
            return user.last_name.indexOf(value) > -1;
          })
        }
    },
    created: function(){
      if(this.$route.query.Alert){
        this.Alert = this.$route.query.Alert;
      }
        this.fetchUsers();
    },
    
    components:{
      Alert
    }
}

</script>


<style scoped>
</style>
