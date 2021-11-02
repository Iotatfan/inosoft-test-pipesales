<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Connection'"
      :dropdownContents="connectionFilter"
    />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  computed: {
    connectionFilter: function () {
      return this.$store.state.connection;
    },
  },
};
</script>

<style>
</style>