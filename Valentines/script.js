// Get elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const sadMsg = document.getElementById("sad-message");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.querySelector(".buttons");

// Open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";
});

// Full sad text list
const sadTexts = [
  "Are you sure? 🥺",
  "Really sure?? 😭",
  "Think carefully...",
  "I will be very sad...",
  "Extremely sad...",
  "Devastated...",
  "Crying already...",
  "Sobbing on the floor...",
  "Heart shattered 💔",
  "You don’t mean that right?",
  "This must be a mistake...",
  "Click again but properly...",
  "Maybe your finger slipped...",
  "Let’s try that again...",
  "You’re joking right?",
  "Please reconsider...",
  "I prepared everything...",
  "I even practiced my outfit...",
  "Last chance 😢",
  "Okay this is awkward...",
  "I’m losing hope...",
  "Don’t do this to me...",
  "My heart can’t take it...",
  "Plssssss 🥺"
];

let noCount = 0;

// When NO is clicked
noBtn.addEventListener("click", () => {

  if (noCount < sadTexts.length) {
    // Run through full list first
    sadMsg.textContent = sadTexts[noCount];
  } else {
    // After list finishes, repeat last 3 forever
    const lastThree = sadTexts.slice(-3);
    const index = (noCount - sadTexts.length) % 3;
    sadMsg.textContent = lastThree[index];
  }

  noCount++;

  // Make YES grow slightly every click
  const scale = 1 + noCount * 0.1;
  yesBtn.style.transform = `scale(${Math.min(scale, 2.5)})`;
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "YAYYYY 💕";
  sadMsg.textContent = "I LUV U MY EGIYA 💕";
  catImg.src = "cat_dance.gif";
  buttons.style.display = "none";
});
