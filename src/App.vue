<template>
  <main>
    <div v-if="showWelcomeScreen" class="welcome-screen">
      <h1>Welcome to the Social Media Quiz!</h1>
      <button @click="startQuiz">Start Quiz</button>
    </div>
    <template v-else>
      <h1>Quiz Title</h1>
      <Question
        v-if="currentQuestionIndex < questions.length"
        :questionText="questions[currentQuestionIndex].text"
        @answerSelected="handleAnswer"
      />
      <ResultCard v-else-if="result" :title="result.title" :description="result.description" />
      <p v-else>Quiz Finished - Calculating Results...</p>
    </template>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Question from './components/Question.vue';
import ResultCard from './components/ResultCard.vue';

const showWelcomeScreen = ref(true);
const questions = ref([
  { text: 'Do you enjoy spending time in large groups?', yesPoints: { extroversion: 1 }, noPoints: { introversion: 1 } },
  { text: 'Do you often initiate conversations?', yesPoints: { extroversion: 1 }, noPoints: { introversion: 1 } },
  // Add more questions
]);

const currentQuestionIndex = ref(0);
const scores = ref({
  extroversion: 0,
  introversion: 0,
  // Add more variables based on your quiz
});
const result = ref(null);

const startQuiz = () => {
  showWelcomeScreen.value = false;
};

const handleAnswer = (answer) => {
  const currentQuestion = questions.value[currentQuestionIndex.value];
  if (answer === 'yes' && currentQuestion.yesPoints) {
    for (const variable in currentQuestion.yesPoints) {
      scores.value[variable] += currentQuestion.yesPoints[variable];
    }
  } else if (answer === 'no' && currentQuestion.noPoints) {
    for (const variable in currentQuestion.noPoints) {
      scores.value[variable] += currentQuestion.noPoints[variable];
    }
  }

  currentQuestionIndex.value++;

  if (currentQuestionIndex.value === questions.value.length) {
    calculateResult();
  }
};

const calculateResult = () => {
  let bestMatch = null;
  let highestScore = -1;

  const resultsData = [
    { variable: 'extroversion', title: 'The Social Butterfly', description: 'You thrive in social settings...' },
    { variable: 'introversion', title: 'The Reflective Soul', description: 'You appreciate quiet time and introspection...' },
    // Add more result info card data
  ];

  for (const resultOption of resultsData) {
    if (scores.value[resultOption.variable] > highestScore) {
      highestScore = scores.value[resultOption.variable];
      bestMatch = resultOption;
    }
  }

  result.value = bestMatch;
};
</script>

<style scoped>
main {
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}

.welcome-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px; /* Adjust as needed */
}

.welcome-screen h1 {
  margin-bottom: 20px;
}

.welcome-screen button {
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>