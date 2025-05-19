<template>
  <main>
    <div v-if="showWelcomeScreen" class="welcome-screen">
      <img src="./assets/title_screen.svg" alt="Welcome to the Social Media Quiz!, Start Quiz" class="main-title-and-start-button-image" @click="startQuiz" style="cursor: pointer;">
    </div>
    <template v-else>
      <Question
        v-if="currentQuestionIndex < questions.length"
        :questionText="questions[currentQuestionIndex].text"
        :questionImage="questions[currentQuestionIndex].image"
        @answerSelected="handleAnswer"
      />
      <ResultCard v-else-if="result" :title="result.title" :description="result.description" />
      <p v-else>Quiz finalizado <br> Calculando resultados... <br> (Puntaje de cada uno) <br> {{ scores }}</p>
    </template>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Question from './components/Question.vue';
import ResultCard from './components/ResultCard.vue';

const showWelcomeScreen = ref(true);
const questions = ref([
  { text: '1', image: '/questions/question1.svg', yesPoints: { instagram: 1, tiktok: 1, facebook: 1, snapchat: 1 }, noPoints: { nope: 1 } },
  { text: '2', image: '/questions/question2.svg', yesPoints: { facebook: 1, xtwitter: 1 }, noPoints: { nope: 1 } },
  { text: '3', image: '/questions/question3.svg', yesPoints: { spotify: 1, youtube: 1 }, noPoints: { nope: 1 } },
  { text: '4', image: '/questions/question4.svg', yesPoints: { twitch: 1, wassap: 1, xtwitter: 1, tiktok: 1 }, noPoints: { nope: 1 } },
  { text: '5', image: '/questions/question5.svg', yesPoints: { pinterest: 1, instagram: 1 }, noPoints: { nope: 1 } },
  { text: '6', image: '/questions/question6.svg', yesPoints: { tinder: 1, instagram: 1 }, noPoints: { nope: 1 } },
  { text: '7', image: '/questions/question7.svg', yesPoints: { twitch: 1, youtube: 1, tiktok: 1 }, noPoints: { nope: 1 } },
]);

const currentQuestionIndex = ref(0);
const scores = ref({
  instagram: 0,
  tiktok: 0,
  facebook: 0,
  snapchat: 0,
  xtwitter: 0,
  spotify: 0,
  youtube: 0,
  twitch: 0,
  wassap: 0,
  pinterest: 0,
  tinder: 0,
  nope: 0
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
    console.log(scores)
  }
};

const calculateResult = () => {
  let bestMatch = null;
  let highestScore = -1;

  const resultsData = [
    { variable: 'extroversion', title: 'The Social Butterfly', description: 'You thrive in social settings...' },
    { variable: 'introversion', title: 'The Reflective Soul', description: 'You appreciate quiet time and introspection...' },
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

.main-title-and-start-button-image {
  width: 100%;
  cursor: pointer;
}

.welcome-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
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