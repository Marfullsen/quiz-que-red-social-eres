// --- Configuration ---
const slides = [
  {
    // Slide 1: Main Menu
    image: "1.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "startQuiz",
      },
    ],
  },
  {
    // Slide 2: Question 1
    image: "2.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { instagram: 1, tiktok: 1, facebook: 1, snapchat: 1 },
      },
    ],
  },
  {
    // Slide 3: Question 2
    image: "3.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { facebook: 1, xtwitter: 1 },
      },
    ],
  },
  {
    // Slide 4: Question 3
    image: "4.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { spotify: 1, youtube: 1 },
      },
    ],
  },
  {
    // Slide 5: Question 4
    image: "5.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { twitch: 1, wassap: 1, xtwitter: 1, tiktok: 1 },
      },
    ],
  },
  {
    // Slide 6: Question 5
    image: "6.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { pinterest: 1, instagram: 1 },
      },
    ],
  },
  {
    // Slide 7: Question 6
    image: "7.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { tinder: 1, instagram: 1 },
      },
    ],
  },
  {
    // Slide 8: Question 7
    image: "8.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 0.5, y2: 1 },
        action: "answer",
        value: { nope: 1 },
      },
      {
        shape: "rect",
        proportions: { x1: 0.5, y1: 0, x2: 1, y2: 1 },
        action: "answer",
        value: { twitch: 1, youtube: 1, tiktok: 1 },
      },
    ],
  },
  {
    // Slide 9: "Your results are..."
    image: "9.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "showResults",
      },
    ],
  },
  {
    // Slide 10: Result for Instagram
    image: "10.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "instagram",
  },
  {
    // Slide 10: Result for Facebook
    image: "11.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "facebook",
  },
  {
    // Slide 11: Result for Spotify
    image: "12.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "spotify",
  },
  {
    // Slide 12: Result for YouTube
    image: "13.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "youtube",
  },
  {
    // Slide 13: Result for Twitch
    image: "14.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "twitch",
  },
  {
    // Slide 14: Result for X (Twitter)
    image: "15.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "xtwitter",
  },
  {
    // Slide 15: Result for Pinterest
    image: "16.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "pinterest",
  },
  {
    // Slide 16: Result for WhatsApp
    image: "17.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "wassap",
  },
  {
    // Slide 17: Result for TikTok
    image: "18.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "tiktok",
  },
  {
    // Slide 18: Result for Tinder
    image: "19.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "tinder",
  },
  {
    // Slide 18: Result for no
    image: "21.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "nextSlide",
      },
    ],
    resultVariable: "nope",
  },
  {
    // Slide 19: Thanks for playing
    image: "20.svg",
    mapAreas: [
      {
        shape: "rect",
        proportions: { x1: 0, y1: 0, x2: 1, y2: 1 },
        action: "restartQuiz",
      },
    ],
  },
];

// --- State ---
let currentSlideIndex = 0;
const scores = {
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
  nope: 0,
};

// --- DOM Elements ---
const slideImage = document.getElementById("slide-image");
const slideMapAreas = document.getElementById("slide-map-areas");

// --- Helper Functions ---
function calculateCoordsFromProportions(proportions, imageWidth, imageHeight) {
  if (
    !proportions ||
    typeof imageWidth !== "number" ||
    typeof imageHeight !== "number"
  ) {
    console.warn("calculateCoordsFromProportions: Invalid input", {
      proportions,
      imageWidth,
      imageHeight,
    });
    return "0,0,0,0"; // Fallback for safety
  }
  const { x1, y1, x2, y2 } = proportions;
  const coords = [
    Math.round(x1 * imageWidth),
    Math.round(y1 * imageHeight),
    Math.round(x2 * imageWidth),
    Math.round(y2 * imageHeight),
  ];
  return coords.join(",");
}

function updateMapAreaCoordinates() {
  const currentSlideData = slides[currentSlideIndex];

  if (!slideImage || !currentSlideData || !currentSlideData.mapAreas) {
    if (slideMapAreas) slideMapAreas.innerHTML = "";
    return;
  }

  const displayedWidth = slideImage.clientWidth;
  const displayedHeight = slideImage.clientHeight;

  if (displayedWidth === 0 || displayedHeight === 0) {
    console.warn(
      "Image dimensions are zero.  This is likely happening because the image hasn't loaded, or the container doesn't have a size."
    );
    return; // Exit, and try again later, when the image is loaded.
  }
  let mapHTML = ""; // Use a string to build up the map content
  currentSlideData.mapAreas.forEach((areaConfig) => {
    const coords = calculateCoordsFromProportions(
      areaConfig.proportions,
      displayedWidth,
      displayedHeight
    );
    mapHTML += `<area shape="${
      areaConfig.shape
    }" coords="${coords}" href="#" alt="Area for ${
      areaConfig.action
    }" data-action="${areaConfig.action}" ${
      areaConfig.value !== undefined
        ? `data-value='${JSON.stringify(areaConfig.value)}'`
        : ""
    }>`;
  });
  slideMapAreas.innerHTML = mapHTML; // Set the innerHTML all at once for efficiency.

  // Add event listeners *after* the HTML is in the DOM:
  const areaElements = slideMapAreas.querySelectorAll("area"); //Use querySelectorAll
  areaElements.forEach((areaElement) => {
    areaElement.addEventListener("click", handleAreaClick);
  });
}

function updateSlide() {
  const currentSlideData = slides[currentSlideIndex];
  if (!currentSlideData) {
    console.error(
      `Slide data is undefined for slide index: ${currentSlideIndex}`
    );
    return;
  }

  slideImage.src = currentSlideData.image;
  slideImage.alt = `Slide ${currentSlideIndex + 1}`;

  // Use .onload to ensure correct image size before calculating map area coordinates.
  slideImage.onload = () => {
    updateMapAreaCoordinates();
    slideImage.onload = null; // prevent multiple calls
  };
  slideImage.onerror = () => {
    console.error("Failed to load image:", slideImage.src);
    slideMapAreas.innerHTML = "";
  };
  // Check if the image is already loaded (from cache).  If so, trigger the onload
  if (slideImage.complete) {
    updateMapAreaCoordinates();
  }
}

function handleAreaClick(event) {
  event.preventDefault();
  const action = event.target.dataset.action;
  const value = event.target.dataset.value;

  if (action === "startQuiz") {
    currentSlideIndex = 1;
    // Reset scores
    for (const key in scores) {
      scores[key] = 0;
    }
    updateSlide();
  } else if (action === "answer") {
    if (value) {
      const valueObject = JSON.parse(value);
      for (const key in valueObject) {
        if (scores.hasOwnProperty(key)) {
          scores[key] += valueObject[key];
        }
      }
    }
    if (currentSlideIndex < 7) {
      // 7 is the last question slide.
      currentSlideIndex++;
    } else {
      currentSlideIndex = 8; // Go to "Your results are..." slide
    }
    updateSlide();
  } else if (action === "showResults") {
    displayResults();
  } else if (action === "nextSlide") {
    currentSlideIndex = slides.length - 1;
    updateSlide();
  } else if (action === "restartQuiz") {
    currentSlideIndex = 0;
    updateSlide();
  }
}

function displayResults() {
  // Check if all answers are nope
  const totalScore = Object.values(scores).reduce((acc, val) => acc + val, 0);
  const onlyNope = scores.nope === totalScore;

  if (onlyNope) {
    // Go to the "nope" result slide
    const nopeSlide = slides.findIndex((s) => s.resultVariable === "nope");
    currentSlideIndex = nopeSlide !== -1 ? nopeSlide : slides.length - 1;
    updateSlide();
    return;
  }

  // Find max score (ignoring nope)
  let maxScore = -Infinity;
  const topChoices = [];
  for (const [platform, score] of Object.entries(scores)) {
    if (platform === "nope") continue; // skip nope
    if (score > maxScore) {
      maxScore = score;
      topChoices.length = 0; // clear and replace
      topChoices.push(platform);
    } else if (score === maxScore) {
      topChoices.push(platform);
    }
  }

  // Handle the case where no platform has a score > 0
  if (topChoices.length === 0) {
    currentSlideIndex = slides.findIndex((s) => s.resultVariable === "nope");
    if (currentSlideIndex === -1) currentSlideIndex = slides.length - 1;
    updateSlide();
    return;
  }
  // Randomly select one of the top scorers
  const selected = topChoices[Math.floor(Math.random() * topChoices.length)];

  console.log(topChoices);
  

  // Find corresponding result slide
  const resultIndex = slides.findIndex(
    (slide) => slide.resultVariable === selected
  );

  if (resultIndex !== -1) {
    currentSlideIndex = resultIndex;
  } else {
    console.warn("Result slide not found for:", selected);
    currentSlideIndex = slides.length - 1; // fallback to last slide
  }

  updateSlide();
}

// --- Event Listeners ---
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateMapAreaCoordinates();
  }, 100);
});

// --- Initial Setup ---
updateSlide(); // Load the first slide
