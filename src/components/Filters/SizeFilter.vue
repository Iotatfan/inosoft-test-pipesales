<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown :filterType="'Size'" :dropdownContents="sizeFilter" />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  computed: {
    sizeFilter: function () {
      return this.$store.state.size;
    },
  },
  watch: {
    sizeFilter(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style>
</style>