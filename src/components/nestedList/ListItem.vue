<script>
import { defineComponent } from "vue";
import ArrowRight from "../icons/ArrowRight.vue";

export default defineComponent({
	components: {
		ArrowRight,
	},
	props: {
		isExpanded: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		expandedContent: {
			type: String,
			default: "",
		},
	},
});
</script>

<template>
  <div class="list-item">
    <span class="collapsed-row">
     <ArrowRight class="arrow" :color="'#000'" :size="'20px'" :clickable="true" :isExpanded="isExpanded" />
    <p>
      {{ name }}
    </p> 
    </span>
    <div v-if="isExpanded" class="expanded-row">
      <p>
      {{ expandedContent }}
    </p>
  </div>
  </div>
</template>


<style scoped>
.list-item {
  border-bottom: 1px solid #000000;
}

.collapsed-row {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.expanded-row {
  border-top: 1px solid #ccc;
  padding-left: 20px;
}

</style>
