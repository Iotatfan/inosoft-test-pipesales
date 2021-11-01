<template>
  <div
    class="
      flex flex-col
      h-screen
      bg-gray-200
      justify-center
      mx-auto
      overflow-y-scroll
    "
  >
    <div>
      <h1 class="text-gray-900 font-bold text-4xl m-4">Pipesales Datatables</h1>
    </div>
    <!-- Filter Group -->
    <Filters />
    <!-- Table Group -->
  </div>
</template>

<script>
import Filters from "./Filters.vue";
export default {
  components: { Filters },
};
</script>

<style>
</style>