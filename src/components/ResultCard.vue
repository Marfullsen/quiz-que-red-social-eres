<template>
  <div class="result-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String,
});
</script>

<style scoped>
.result-card {
  /* Styles here */
}
</style>