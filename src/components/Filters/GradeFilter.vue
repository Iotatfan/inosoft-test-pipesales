<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown :filterType="'Grade'" :dropdownContents="gradeFilter" />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  computed: {
    gradeFilter: function () {
      return this.$store.state.grade;
    },
  },
  watch: {
    gradeFilter(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style>
</style>