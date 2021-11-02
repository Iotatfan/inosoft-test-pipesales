<template>
  <div class="md:flex-shrink relative w-auto md:w-64 m-2">
    <FilterDropdown
      :filterType="'Connection'"
      :dropdownContents="connectionFilter"
      :count="countConnection"
    />
  </div>
</template>

<script>
import FilterDropdown from "../FilterDropdown.vue";
export default {
  components: { FilterDropdown },
  methods: {
    countGrade: function (qty, pipe) {
      if (this.filters.grade && pipe.grade.includes(this.filters.grade)) {
        qty = this.countSize(qty, pipe);
      } else if (!this.filters.grade) {
        qty = this.countSize(qty, pipe);
      }
      return qty;
    },
    countSize: function (qty, pipe) {
      if (this.filters.size && pipe.size.includes(this.filters.size)) {
        qty++;
      } else if (!this.filters.size) {
        qty++;
      }
      return qty;
    },
    countConnection: function (item) {
      let qty = 0;

      this.$store.state.pipes.forEach((pipe) => {
        if (pipe[this.connectionFilter.name] === item) {
          if (
            !this.filters.productType &&
            !this.filters.grade &&
            !this.filters.size
          ) {
            qty++;
          } else if (
            this.filters.productType &&
            pipe.productType.includes(this.filters.productType)
          ) {
            qty = this.countGrade(qty, pipe);
          } else if (!this.filters.productType) {
            qty = this.countGrade(qty, pipe);
          }
        }
      });
      console.log(item, qty);
      return qty;
    },
  },
  computed: {
    filters: function () {
      return this.$store.state.filters;
    },
    connectionFilter: function () {
      return this.$store.state.connection;
    },
  },
};
</script>

<style>
</style>