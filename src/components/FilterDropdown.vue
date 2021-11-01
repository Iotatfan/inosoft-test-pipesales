<template>
  <div
    class="md:flex-shrink relative w-auto md:w-64 m-2"
    v-on-clickaway="hideDropdown"
  >
    <button
      class="bg-gray-200 border-2 border-black rounded-xl w-full z-0"
      v-on:click="showMenu = !showMenu"
    >
      <div class="flex flex-row justify-between mt-1 mx-2">
        <p class="text-black text-lg">Filter Type</p>
        <font-awesome-icon
          :icon="faAngleDown"
          class="text-gray-900 text-lg my-auto"
        />
      </div>
      <div class="flex flex-row mx-2 justify-between">
        <h1 class="text-gray-900 font-bold text-2xl">
          {{ selectedFilter ? selectedFilter : "Filter" }}
        </h1>
        <font-awesome-icon
          v-if="selectedFilter"
          v-on:click="resetFilter"
          v-on:click.stop=""
          :icon="faTimesCircle"
          class="text-gray-900 text-lg my-auto z-10"
        />
      </div>
    </button>
    <!-- Dropdown Menu -->
    <DropdownMenu :showMenu="showMenu" :changeFilter="changeFilter" />
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu.vue";

export default {
  components: { FontAwesomeIcon, DropdownMenu },
  data() {
    return {
      faAngleDown: faAngleDown,
      faTimesCircle: faTimesCircle,
      selectedFilter: null,
      showMenu: false,
    };
  },
  directives: {
    onClickaway: onClickaway,
  },
  methods: {
    hideDropdown: function () {
      this.showMenu = false;
    },
    changeFilter: function (val) {
      this.selectedFilter = val;
      this.showMenu = false;
      console.log(this.selectedFilter);
    },
    resetFilter: function () {
      this.selectedFilter = null;
      console.log(this.selectedFilter);

    },
  },
};
</script>

<style>
</style>