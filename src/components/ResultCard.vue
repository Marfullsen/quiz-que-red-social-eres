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
  // Add props for any images or other data
});
</script>

<style scoped>
/* Styles for your result card */
.result-card {
  /* Styles from your Canva design */
}
</style>