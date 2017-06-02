<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import {getCSFRToken} from './service/httpService'
// import {CSRF_TOKEN} from './store/user'
// import { mapActions } from 'vuex'
export default {
  name: 'app',
  data: function () {
    return {}
  },
  // created: function () {
  //   this.init()
  // },
  // created () {
  //   this.init()
  // },
  methods: {
    // ...mapActions([CSRF_TOKEN]),
    // init () {
    //   getCSFRToken(this)
    //   .then((response) => {
    //     console.log(response.json())
    //     response.json().then(function (value) {
    //       this.CSRF_TOKEN(value)
    //       // this.CSRFTOKEN = value
    //     })
    //   })
    // }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
