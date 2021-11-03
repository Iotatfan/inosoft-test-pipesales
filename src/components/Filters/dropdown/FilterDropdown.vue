<template>
  <div v-on-clickaway="hideDropdown">
    <button
      class="
        bg-gray-200
        border-2 border-black
        rounded-xl
        overflow-y-hidden
        w-full
        z-0
      "
      v-on:click="showMenu = !showMenu"
    >
      <div class="flex flex-row justify-between mt-1 mx-2">
        <p class="text-black text-lg">{{ filterType }}</p>
        <font-awesome-icon
          :icon="faAngleDown"
          class="text-gray-900 text-lg my-auto"
        />
      </div>
      <div class="flex flex-row mx-2 justify-between">
        <h1 class="text-gray-900 font-bold text-xl truncate">
          {{ selectedFilter }}
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
import DropdownMenu from "../../filters/dropdown/DropdownMenu.vue";
import { mapActions } from "vuex";

export default {
  components: { FontAwesomeIcon, DropdownMenu },
  data() {
    return {
      faAngleDown: faAngleDown,
      faTimesCircle: faTimesCircle,
      filterValue: null,
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
      this.filterValue = val;
      this.showMenu = false;
    },
    resetFilter: function () {
      const payload = {
        name: this.dropdownContents.name,
        value: null,
      };
      this.updateFilter(payload);
      this.filterValue = null;
    },
  },
  computed: {
    selectedFilter: function () {
      return this.filterValue ? this.filterValue : "ALL";
    },
  },
};
</script>

<style>
</style>