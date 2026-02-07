/* ========== ELEMENTS ========== */
const heart = document.getElementById("heart");
const progress = document.getElementById("progress");
const quote = document.getElementById("quote");
const music = document.getElementById("bgMusic");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const subtext = document.getElementById("subtext");
const loveName = document.getElementById("loveName");

/* ========== DATA ========== */
const nameList = [
  "Love",
  "Eli",
  "Elika",
  "Elephant",
  "Cutie",
  "Sweetheart"
];

const quotes = [
  "Downloading butterflies for you 🦋",
  "Encrypting my heart ❤️🔐",
  "Compiling forever with you 💕",
  "Charging unlimited cuddles 🔋",
  "Syncing smiles and memories 😊",
  "Processing a very important question 💌",
  "Calibrating romance levels 💘",
  "Almost ready to steal your heart 😘",
  "Loading happiness… please wait ✨",
  "Preparing the sweetest moment 💖"
];

const teasingLines = [
  "Aww come on, say yes ❤️",
  "You know I already won 😌",
  "Wrong button, try again 😘",
  "This is not an option anymore 😜",
  "I’m already your Valentine 💕"
];

/* ========== LOADING LOGIC ========== */
let load = 0;

heart.onclick = () => {
  if (load === 0) {
    music.volume = 0.25;
    music.play();
  }

  if (load < 100) {
    load += 20;
    progress.style.width = load + "%";
    quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }

  if (load >= 100) {
    setTimeout(() => switchScreen("loading", "proposal"), 600);
  }
};

/* ========== SCREEN SWITCH ========== */
function switchScreen(hide, show) {
  document.getElementById(hide).classList.remove("active");
  document.getElementById(hide).classList.add("hidden");

  document.getElementById(show).classList.remove("hidden");
  document.getElementById(show).classList.add("active");
}

/* ========== NO BUTTON CHAOS ========== */
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "fixed";

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Change name in line 1
  loveName.textContent =
    nameList[Math.floor(Math.random() * nameList.length)];

  // Change line 2 text
  subtext.style.opacity = 0;
  setTimeout(() => {
    subtext.textContent =
      teasingLines[Math.floor(Math.random() * teasingLines.length)];
    subtext.style.opacity = 1;
  }, 150);
});

/* ========== YES CLICK ========== */
yesBtn.onclick = () => {
  switchScreen("proposal", "bill");
};
