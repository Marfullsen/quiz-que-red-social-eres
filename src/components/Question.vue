<template>
  <div class="question-container">
    <h2>{{ questionText }}</h2>
    <div class="answers">
      <button @click="selectAnswer('yes')">Yes</button>
      <button @click="selectAnswer('no')">No</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  questionText: String,
});

const emit = defineEmits(['answerSelected']);

const selectAnswer = (answer) => {
  emit('answerSelected', answer);
};
</script>

<style scoped>
/* Basic styling, will be refined later */
.question-container {
  /* Styles from your Canva design */
}
.answers button {
  /* Styles for your buttons */
}
</style>