<script setup lang="ts">
import CardWithTabs from "../components/cardWithTabs/CardWithTabs.vue";
</script>

<template>
  <div class="home">
    <CardWithTabs />
  </div>
    
</template>

<style scoped>
.home {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>