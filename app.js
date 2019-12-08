// Get HTML objects
const gameboard = document.querySelector('#gameboard');
const infoBar = document.querySelector('#info-bar');
const croinsText = document.querySelector('#croins');
const maldbucksText = document.querySelector('#maldbucks');
const cpsText = document.querySelector('#cps');
const begCpcText = document.querySelector('#beg-cpc');
const begButton = document.querySelector('#beg-button');

// Upgrades
const upgrade1 = document.querySelector('#upgrade1');
const upgrade1Text = document.querySelector('#upgrade1-text');
const upgrade2 = document.querySelector('#upgrade2');
const upgrade2Text = document.querySelector('#upgrade2-text');

// Game Variables
let croins = 0; // Number of Croins
let maldbucks = 0; // Number of Maldbucks
let cpc = 1; // Croins per click
let cps = 0; // Croins per second

// Main function
function main() {
  startupFunctions();
  checkUpgrades();
}

main();

function startupFunctions() {
  updateInfo();
  checkForBeg();
  addCPS();
}

// Updates in-game info
function updateInfo() {
  croinsText.innerHTML = 'Croins: ' + croins;
  maldbucksText.innerHTML = 'Maldbucks: ' + maldbucks;
  cpsText.innerHTML = 'Croins/sec: ' + cps;
  begCpcText.innerHTML = 'Per Click: ' + cpc;
}

// Add Croins every second
function addCPS() {
  setInterval(() => {
    croins += cps;
    updateInfo();
  }, 1000)
}

// Check if Beg Button is being clicked
function checkForBeg() {
  begButton.addEventListener('click', () => {
    croins += cpc;
    updateInfo();
  })
}

// Check if upgrades have been clicked
function checkUpgrades() {
  checkUpgrade1();
  checkUpgrade2();
}

// Upgrade 1
function checkUpgrade1() {
  upgrade1.addEventListener('click', () => {
    cpc += 1;
    updateInfo();
  })
}

// Upgrade 2
function checkUpgrade2() {
  upgrade2.addEventListener('click', () => {
    cps += 1;
    updateInfo();
  })
}