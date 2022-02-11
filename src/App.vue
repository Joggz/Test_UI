<template>
  <div id="">
    <Navbar />
    <div class="flex justify-center mt-10 h-5/6">
      <CenterHome />
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/header.vue";
import CenterHome from "./components/homepage.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Navbar,
    CenterHome,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
