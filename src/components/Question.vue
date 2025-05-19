<template>
  <div class="question-container">
    <img :src="questionImage" :alt="questionText" class="question-image">
    <div class="answers-container">
      <div class="answers-buttons">
        <img src="/yes.png" alt="Si" class="yes-button-image" @click="selectAnswer('yes')" style="cursor: pointer;">
        <img src="/no.png" alt="No" class="no-button-image" @click="selectAnswer('no')" style="cursor: pointer;">
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  questionText: String,
  questionImage: String,
});

const emit = defineEmits(['answerSelected']);

const selectAnswer = (answer) => {
  emit('answerSelected', answer);
};
</script>

<style scoped>

.question-container {
  color: beige;
}

.answers-container {
  position: absolute;
  left: 40%;
  bottom: 15%;
}

.answers-buttons {
  display: flex ;
}

.no-button-image {
  margin-left: 50px
}

.question-image {
  width: 70%;
}

</style>