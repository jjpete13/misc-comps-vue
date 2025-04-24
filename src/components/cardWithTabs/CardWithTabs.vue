<script setup lang="ts">
import { ref } from "vue";
const tabs = [
	{ name: "tab1", content: "tab 1 content" },
	{ name: "tab2", content: "tab 2 content" },
	{ name: "tab3", content: "tab 3 content" },
	{ name: "tab4", content: "tab 4 content" },
	{ name: "tab5", content: "tab 5 content" },
];

const activeTab = ref(tabs[0]);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

</script>

<template>
  <div class="card">
  <div class="card-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      type="button"
      :class="{ active: activeTab.name === tab.name }"
      @click="setActiveTab(tab)"
    >
      {{ tab.name }}
    </button>
  </div>
  <div class="card-content">
  </div>
  <h3>Active Tab: {{ activeTab.name }}</h3>
  </div>
</template>

<style scoped>
.card {
	background-color: #fff;
	border-radius: 15px;
	border: 0.5px solid #858585;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	padding: 0px;
	margin-bottom: 20px;
	min-width: 300px;
	max-width: 400px;
	min-height: 300px;
}

.card-tabs {
	width: 100%;
	display: flex;
	margin: 0 0 10px 0;
	overflow-x: auto;
	scrollbar-width: none;
  border-radius: inherit;

	* + button {
		border-left: 1px solid #858585;
	}
}
button {
		background-color: #c2c2c2;
		border-radius: 0;
    border: none;
		width: fit-content;
		min-width: 80px;
    min-height: 50px;
	}

	.active {
		border-top: 3px solid #4ea1c4;
		background-color: #fff;
		color: #000000;
	}
  h3 {
    color: #000;
    padding-left: 20px;
  }
</style>