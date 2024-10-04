// Базовий клас Pokemon
class Pokemon {
    constructor(name, elementIds) {
        this.name = name;
        this.health = 100;
        this.elementIds = elementIds;
    }

    // Метод для оновлення здоров'я
    updateHealth(amount) {
        this.health = Math.max(0, this.health + amount);
        this.updateUI();
    }

    // Оновлення UI
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

    // Метод для атаки іншого покемона
    attack(opponent) {
        const damage = this.randomDamage(-20, -5);
        const selfDamage = this.randomDamage(-10, 0);

        opponent.updateHealth(damage);
        this.updateHealth(selfDamage);
    }

    randomDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Клас Character, який наслідує від Pokemon
class Character extends Pokemon {
    constructor(name, elementIds) {
        super(name, elementIds);  // Викликає конструктор базового класу
    }


}

// Клас Enemy, який наслідує від Pokemon
class Enemy extends Pokemon {
    constructor(name, elementIds) {
        super(name, elementIds);  // Викликає конструктор базового класу
    }


}

// Створюємо персонажа і ворога
const pikachu = new Character('Pikachu', {
    progressBar: 'progressbar-character',
    healthText: 'health-character'
});

const charmander = new Enemy('Charmander', {
    progressBar: 'progressbar-enemy',
    healthText: 'health-enemy'
});

// Події для кнопок
document.getElementById('btn-kick').addEventListener('click', () => {
    pikachu.attack(charmander);
});

document.getElementById('btn-second-attack').addEventListener('click', () => {
    charmander.attack(pikachu);
});
