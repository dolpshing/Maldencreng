// Get HTML objects
const gameboard = document.querySelector('#gameboard');
const infoBar = document.querySelector('#info-bar');
const croinsText = document.querySelector('#croins');
const maldbucksText = document.querySelector('#maldbucks');
const cpsText = document.querySelector('#cps');
const begCpcText = document.querySelector('#beg-cpc');
const begButton = document.querySelector('#beg-button');

// Upgrades
let upgrade1 = {
  object: document.querySelector('#upgrade1'),
  costText: document.querySelector('#upgrade1-cost'),
  descText: document.querySelector('#upgrade1-desc'),
  cost: 10,
  desc: 1
}

let upgrade2 = {
  object: document.querySelector('#upgrade2'),
  costText: document.querySelector('#upgrade2-cost'),
  descText: document.querySelector('#upgrade2-desc'),
  cost: 100,
  desc: 1
}

// Game Variables
let croins = 0; // Number of Croins
let maldbucks = 0; // Number of Maldbucks
let cpc = 1; // Croins per click
let cps = 0; // Croins per second

// Check if Beg Button is being clicked
const checkForBeg = () => {
    croins += cpc;
    updateInfo();
}

// Main function
function main() {
  startupFunctions();
}

main();

function startupFunctions() {
  updateInfo();
  addCPS();
  upgrade1.object.addEventListener('click', checkUpgrades);
  begButton.addEventListener('click', checkForBeg);
}

// Updates in-game info
function updateInfo() {
  croinsText.innerHTML = `Croins: ${croins}`;
  maldbucksText.innerHTML = `Maldbucks: ${maldbucks}`;
  cpsText.innerHTML = `Croins/sec: ${cps}`;
  begCpcText.innerHTML = `Per Click: ${cpc}`;
  upgrade1.costText.innerHTML = croinsCost(upgrade1.cost);
  upgrade1.descText.innerHTML = croinsDesc(upgrade1.desc, 'CPC');
  upgrade2.descText.innerHTML = croinsDesc(upgrade1.desc, 'CPS');
}

// Function for upgrade costs
function croinsCost(cost) {
  return `Cost: ${cost} Croins`;
}

// Function for description
function croinsDesc(desc, cs) {
  return `+${desc} ${cs}`;
}

// Add Croins every second
function addCPS() {
  setInterval(() => {
    croins += cps;
    updateInfo();
  }, 1000)
}



// Check if upgrades have been clicked
function checkUpgrades() {
  checkUpgrade1();
  checkUpgrade2();
}

// Upgrade 1
const checkUpgrade1 = () => {
  if (croins >= upgrade1.cost) {
    croins -= upgrade1.cost;
    cpc += upgrade1.desc;
    updateInfo();
  }
}

// upgrade1.object.addEventListener('click', () => {

// Upgrade 2
function checkUpgrade2() {
  
}