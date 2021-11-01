<template>
  <div class="bg-gray-200 flex flex-col">
    <div class="flex flex-col md:flex-row justify-center relative">
      <!-- Filter Dropdown -->
      <FilterDropdown v-for="n in 4" :key="n" />
      <!-- Find Button -->
      <div class="md:flex-shrink h-auto w-auto md:w-32 w m-2">
        <button
          class="
            h-full
            w-full
            rounded-xl
            bg-yellow-600
            flex flex-row
            justify-center
            my-2
            md:my-auto
          "
        >
          <font-awesome-icon
            :icon="faSearch"
            class="text-white text-xl my-auto mr-2"
          />
          <p class="text-white text-2xl my-auto">Find</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FilterDropdown from "./FilterDropdown.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FilterDropdown, FontAwesomeIcon },
  data() {
    return {
      faSearch: faSearch,
    };
  },
};
</script>

<style>
</style>