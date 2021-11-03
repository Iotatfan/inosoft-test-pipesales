<template>
  <div id="app">
    <Pipesales />
  </div>
</template>

<script>
import Pipesales from "./components/Pipesales.vue";

export default {
  name: "App",
  components: {
    Pipesales,
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
}
</style>
