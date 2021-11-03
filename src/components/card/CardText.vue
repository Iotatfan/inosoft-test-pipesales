<template>
  <div :class="'flex flex-col'">
    <p class="text-gray-700 text-xs md:text-lg">{{ title }}</p>
    <p class="text-gray-500 text-xs md:text-lg">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style>
</style>