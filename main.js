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
}

const pikachu = new Pokemon('Pikachu', {
    progressBar: 'progressbar-character',
    healthText: 'health-character'
});

const charmander = new Pokemon('Charmander', {
    progressBar: 'progressbar-enemy',
    healthText: 'health-enemy'
});

function randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fight(pokemon1, pokemon2) {
    const damage = randomDamage(-20, -5);
    const selfDamage = randomDamage(-10, 0); // можливість самоушкодження

    pokemon1.updateHealth(damage);
    pokemon2.updateHealth(selfDamage);
}

// Події для кнопок
document.getElementById('btn-kick').addEventListener('click', () => {
    fight(pikachu, charmander);
});

document.getElementById('btn-second-attack').addEventListener('click', () => {
    // Другий тип атаки з більшою шкодою
    fight(charmander, pikachu);
});
