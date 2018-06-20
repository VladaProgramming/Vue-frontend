// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  //components: { App },
  template: `
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item"><router-link to="/">Home</router-link></li> 
    </ul>
    <ul class="navbar-nav navbar-right">
    <li class="nav-item"><router-link to="/Add">Add user</router-link></li> 
    </ul>
  </div>
</nav>
    <router-view></router-view>
  </div>
  `
}).$mount('#app')
