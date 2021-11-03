<template>
  <div class="flex flex-row">
    <p class="text-gray-800 font-semibold text-sm md:text-2xl">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
</style>