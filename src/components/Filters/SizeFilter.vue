<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Size'"
      :dropdownContents="sizeFilter"
      :count="countSize"
    />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  methods: {
    countSize: function (item) {
      let qty = 0;

      this.$store.state.pipes.forEach((pipe) => {
        if (pipe[this.sizeFilter.name] === item) {
          if (!this.filters.productType && !this.filters.grade) {
            qty++;
          }
          else if (
            this.filters.productType &&
            pipe.productType.includes(this.filters.productType)
          ) {
            if (this.filters.grade && pipe.grade.includes(this.filters.grade)) {
              qty++;
            } else if (!this.filters.grade) {
              qty++;
            }
          } else if (!this.filters.productType) {
            if (this.filters.grade && pipe.grade.includes(this.filters.grade)) {
              qty++;
            } else if (!this.filters.grade) {
              qty++;
            }
          }
        }
      });

      return qty;
    },
  },
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