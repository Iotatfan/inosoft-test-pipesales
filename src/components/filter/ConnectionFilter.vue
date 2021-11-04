<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Connection'"
      :dropdownContents="connectionFilter"
    />
  </div>
</template>

<script>
import FilterDropdown from "./dropdown/FilterDropdown.vue";

export default {
  components: { FilterDropdown },
  methods: {},
  computed: {
    connectionFilter: function () {
      return this.$store.state.connection;
    },
  },
  watch: {

  },
};
</script>

<style>
</style>