<script setup lang="js">
import { ref } from 'vue';
import ListItem from './ListItem.vue';

const items = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
  {
    id: 3,
    name: "Item 3",
  },
  {
    id: 4,
    name: "Item 4",
  },
  {
    id: 5,
    name: "Item 5",
  },
]
const setupRef = (list) => {
  let defatuls = [];
  for (const item of list) {
    defatuls.push(false);
  }
  return defatuls
}

const isExpanded = ref(setupRef(items));
</script>


<template>
  <div class="list">
    <span class="list-header">Nested List</span>
    <ListItem v-for="item in items" :key="item.id" :name="item.name" :expandedContent="`${item.name} expanded content`" :isExpanded="isExpanded[item.id - 1]" @click="isExpanded[item.id - 1] = !isExpanded[item.id - 1]" />
  </div>
</template>


<style scoped>
.list {
  background-color: #fff;
  border-radius: 15px;
  color: #000;
  min-width: 300px;
  min-height: 300px;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.item {
  display: flex;
  flex-direction: row;
  place-items: center start;
  padding: 10px;
  border-bottom: 1px solid #858585;
  cursor: pointer;
}
</style>