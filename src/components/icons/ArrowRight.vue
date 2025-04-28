<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#000",
	},
	size: {
		type: String,
		default: "1em",
	},
	clickable: {
		type: Boolean,
		default: false,
	},
	isExpanded: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["click"]);
const Container = props.clickable ? "button" : "div";
// const isExpanded = ref(false)

// const handleClick = () => {
//   isExpanded.value = !isExpanded.value
// }
</script>


<template>
  <Container :style="{ color: props.color, height: props.size, width: props.size, transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>
  </Container>
</template>


<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>