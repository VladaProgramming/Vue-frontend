<template>
  <div id='main' class="container">
  <div class="row justify-content-center">
    <div class="col-12-lg">
        <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">You can list users from here</h5>
       <router-link to='/Users'><button  class="btn btn-primary">Get users</button></router-link>
      </div>
    </div>
  </div>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
    
}
</script>

<style scoped>
.card-body{text-align: center}
#main{padding-top: 3em}

</style>
