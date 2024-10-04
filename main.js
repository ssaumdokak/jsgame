class Pokemon {
    constructor(name, elementIds) {
        this.name = name;
        this.health = 100;
        this.elementIds = elementIds;
    }

    updateHealth(amount) {
        this.health = Math.max(0, this.health + amount); // не дозволяємо значення менше 0
        this.updateUI();
    }

    updateUI() {
        const progressBar = document.getElementById(this.elementIds.progressBar);
        const healthText = document.getElementById(this.elementIds.healthText);
        const healthPercentage = (this.health / 100) * 100;
        
        progressBar.style.width = `${healthPercentage}%`;
        healthText.textContent = `${this.health} / 100`;

        // Змінюємо колір progressBar в залежності від рівня здоров'я
        if (this.health > 50) {
            progressBar.classList.remove("low", "critical");
        } else if (this.health > 20) {
            progressBar.classList.add("low");
            progressBar.classList.remove("critical");
        } else {
            progressBar.classList.add("critical");
        }
    }

    attack(enemy, damageRange, selfDamageRange) {
        const damage = randomDamage(damageRange.min, damageRange.max);
        const selfDamage = randomDamage(selfDamageRange.min, selfDamageRange.max);

        console.log(`${this.name} attacks ${enemy.name}, causing ${Math.abs(damage)} damage!`);
        enemy.updateHealth(damage);
        this.updateHealth(selfDamage);
    }
}

function randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pikachu = new Pokemon('Pikachu', {
    progressBar: 'progressbar-character',
    healthText: 'health-character'
});

const charmander = new Pokemon('Charmander', {
    progressBar: 'progressbar-enemy',
    healthText: 'health-enemy'
});

// Події для кнопок
document.getElementById('btn-kick').addEventListener('click', () => {
    // Pikachu атакує Charmander
    pikachu.attack(charmander, {min: -20, max: -5}, {min: -10, max: 0});
});

document.getElementById('btn-second-attack').addEventListener('click', () => {
    // Charmander атакує Pikachu
    charmander.attack(pikachu, {min: -15, max: -5}, {min: -5, max: 0});
});
