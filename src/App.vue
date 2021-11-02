<template>
  <div id="app">
    <Pipisales />
  </div>
</template>

<script>
import Pipisales from "./components/Pipesales.vue";

export default {
  name: "App",
  components: {
    Pipisales,
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
