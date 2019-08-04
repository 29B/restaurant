<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      <router-view></router-view>
      <!-- <router-link to="/about">登录</router-link> -->
    </div>
  </div>
</template>
<script>
import Header from "./views/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
