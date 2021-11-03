<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Grade'"
      :dropdownContents="gradeFilter"
      :count="countGrade"
    />
  </div>
</template>

<script>
import FilterDropdown from "./dropdown/FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  methods: {
    countGrade: function (item) {
      let qty = 0;

      this.$store.state.pipes.forEach((pipe) => {
        if (pipe[this.gradeFilter.name] === item)
          if (
            this.filters.productType &&
            pipe.productType.includes(this.filters.productType)
          ) {
            qty++;
          } else if (!this.filters.productType) {
            qty++;
          }
      });

      return qty;
    },
  },
  computed: {
    filters: function () {
      return this.$store.state.filters;
    },
    gradeFilter: function () {
      return this.$store.state.grade;
    },
  },
};
</script>

<style>
</style>