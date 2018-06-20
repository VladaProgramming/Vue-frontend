<template>
  <div class="container">
      <h1 class="page-header">Add User</h1>
      <form v-on:submit="addUser">
          <div class="well">
            <h4>Customer Info</h4>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="user.first_name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="user.last_name">
            </div>
        </div>
        <div class="well">
            <h4>Customer Contact</h4>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="user.phone">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Add',

  data () {
    return {
      user:{},
      alert:''
    }
  },
  methods: {
      addUser(e){
      if(!this.user.first_name || !this.user.last_name || !this.user.phone){
        this.alert = 'Please fill in all required fields!';
      }else{
          let newUser = {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            phone: this.user.phone,
            email: this.user.email
          }
          this.$http.post('http://localhost:3000/insertuser/', newUser)
          .then(function(response){
            this.$router.push({path:'/', query: {alert: 'Customer Added'}});
          });
          e.preventDefault();
      }
      e.preventDefault();
    }
  }
}

</script>

<style>

</style>
