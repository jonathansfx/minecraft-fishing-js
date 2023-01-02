// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");
let fish5El = document.getElementById("fish5");
let fish200CodEl = document.getElementById("fish200Cod");

// Gloal Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
fish5El.addEventListener("click", fishX5);
fish200CodEl.addEventListener("click", fish200Cod);

// Event Functions
function selectSteve() {
  // Update Active Border
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");

  // Update character selection Variable
  character = "Steve";
}

function selectAlex() {
  // Update Active Border
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");

  // Update character selection Variable
  character = "Alex";
}

function fishOnce() {
  // Test current character
  if (character === "Steve") {
    // Use Steve Probability Distribution for Fishing
    let randNum = Math.random();

<<<<<<< Updated upstream
    if (randNum < 0.7) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  }
  // Use Alex Probability Distribution for Fishing
  if (character === "Alex") {
    // Use Steve Probability Distribution for Fishing
    let randNum = Math.random();

    if (randNum < 0.1) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.3) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
=======
if (randNum < 0.7) {
  numCod++;
  imgResultEl.src = "img/Raw-Cod.png";
  numCodEl.innerHTML = numCod;
} else if (randNum < 0.9) {
  numSalmon++;
  imgResultEl.src = "img/Raw-Salmon.png";
  numSalmonEl.innerHTML = numSalmon;
} else if (randNum < 0.95) {
  numTropical++;
  imgResultEl.src = "img/Tropical-Fish.png";
  numTropicalEl.innerHTML = numTropical;
} else {
  numPuffer++;
  imgResultEl.src = "img/Pufferfish.png";
  numPufferEl.innerHTML = numPuffer;
}
  } else {
    // Use Alex Probability Distribution for Fishing
    alert("Fish with Alex");
>>>>>>> Stashed changes
  }
}

// +5 and up to 100 Button
