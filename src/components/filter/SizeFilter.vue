<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Size'"
      :dropdownContents="sizeFilter"
    />
  </div>
</template>

<script>
import FilterDropdown from "./dropdown/FilterDropdown.vue";

export default {
  components: { FilterDropdown },
  computed: {
    filters: function () {
      return this.$store.state.filters;
    },
    sizeFilter: function () {
      return this.$store.state.size;
    },
  },
};
</script>

<style>
</style>