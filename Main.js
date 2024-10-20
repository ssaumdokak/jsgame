// main.js
import Pokemon from './Pokemon.js';
import Character from './Character.js';
import Enemy from './Enemy.js';
import clickCounter from './clickCounter.js';

// Create character and enemy
const pikachu = new Character('Pikachu', {
    progressBar: 'progressbar-character',
    healthText: 'health-character'
});

const charmander = new Enemy('Charmander', {
    progressBar: 'progressbar-enemy',
    healthText: 'health-enemy'
});

// Total click counters
let totalKickClicks = 0;
let totalSecondAttackClicks = 0;

const kickCounter = clickCounter(6);
const secondAttackCounter = clickCounter(6);

// Event listeners for buttons
document.getElementById('btn-kick').addEventListener('click', () => {
    if (kickCounter()) {
        pikachu.attack(charmander, totalKickClicks, totalSecondAttackClicks);
        totalKickClicks++;
        console.log(`Total Kick clicks: ${totalKickClicks}`);
    } else {
        alert(`Maximum clicks reached for "Kick" button.`);
    }
});

document.getElementById('btn-second-attack').addEventListener('click', () => {
    if (secondAttackCounter()) {
        charmander.attack(pikachu, totalKickClicks, totalSecondAttackClicks);
        totalSecondAttackClicks++;
        console.log(`Total Second Attack clicks: ${totalSecondAttackClicks}`);
    } else {
        alert(`Maximum clicks reached for "Second Attack" button.`);
    }
});
