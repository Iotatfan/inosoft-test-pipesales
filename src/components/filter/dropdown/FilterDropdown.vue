<template>
  <div v-on-clickaway="hideDropdown">
    <button
      class="bg-gray-200 border-2 border-black rounded-xl w-full z-0"
      v-on:click="showMenu = !showMenu"
    >
      <div class="flex flex-row justify-between mt-1 mx-2">
        <p class="text-black text-lg truncate mr-2 text-left w-10/12">
          {{ filterType }}
        </p>
        <font-awesome-icon
          :icon="faAngleDown"
          class="
            text-gray-900
            hover:text-gray-700
            transition
            duration-300
            ease-in-out
            text-lg
            my-auto
            mr-1
            z-10
            w-2/12
          "
        />
      </div>
      <div class="flex flex-row mx-2 justify-between relative">
        <h1 class="text-gray-900 font-bold text-xl text-left w-10/12 truncate">
          {{ selectedFilter }}
        </h1>
        <font-awesome-icon
          v-if="selectedFilter"
          v-on:click="resetFilter"
          v-on:click.stop=""
          :icon="faTimesCircle"
          class="
            text-gray-900
            hover:text-gray-700
            transition
            duration-300
            ease-in-out
            text-lg
            my-auto
            z-10
            w-2/12
          "
        />
      </div>
    </button>
    <!-- Dropdown Menu -->
    <DropdownMenu
      :showMenu="showMenu"
      :changeFilter="changeFilter"
      :dropdown="dropdownContents"
      :count="count"
    />
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu.vue";
import { mapActions } from "vuex";

export default {
  components: { FontAwesomeIcon, DropdownMenu },
  data() {
    return {
      all: "ALL",
      faAngleDown: faAngleDown,
      faTimesCircle: faTimesCircle,
      showMenu: false,
    };
  },
  directives: {
    onClickaway: onClickaway,
  },
  props: ["filterType", "dropdownContents", "count"],
  methods: {
    ...mapActions(["updateFilter"]),
    hideDropdown: function () {
      this.showMenu = false;
    },
    changeFilter: function (val) {
      const payload = {
        name: this.dropdownContents.name,
        value: val,
      };
      this.updateFilter(payload);
      this.showMenu = false;
    },
    resetFilter: function () {
      if (this.selectedFilter !== this.all) {
        const payload = {
          name: this.dropdownContents.name,
          value: null,
        };
        this.updateFilter(payload);
      }
    },
  },
  computed: {
    filters: function () {
      return this.$store.state.filters;
    },
    selectedFilter: function () {
      return this.filters[this.dropdownContents.name]
        ? this.filters[this.dropdownContents.name]
        : this.all;
    },
  },
};
</script>

<style>
</style>