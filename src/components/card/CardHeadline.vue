<template>
  <div class="flex flex-row">
    <p class="text-gray-800 font-semibold text-center md:text-left text-sm md:text-xl">
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