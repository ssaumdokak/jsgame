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
        const { progressBar, healthText } = this.elementIds;
        const progressBarElement = document.getElementById(progressBar);
        const healthTextElement = document.getElementById(healthText);
        const healthPercentage = (this.health / 100) * 100;
        
        progressBarElement.style.width = `${healthPercentage}%`;
        healthTextElement.textContent = `${this.health} / 100`;

        if (this.health > 50) {
            progressBarElement.classList.remove("low", "critical");
        } else if (this.health > 20) {
            progressBarElement.classList.add("low");
            progressBarElement.classList.remove("critical");
        } else {
            progressBarElement.classList.add("critical");
        }
    }

    // Метод для атаки іншого покемона
    attack(opponent) {
        const damage = this.randomDamage(-20, -5);
        const selfDamage = this.randomDamage(-10, 0);

        opponent.updateHealth(damage);
        this.updateHealth(selfDamage);

        this.logBattle(opponent, damage, selfDamage);
    }

    // Метод для випадкової шкоди
    randomDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Лог бою
    logBattle(opponent, damage, selfDamage) {
        const logs = [
            `${this.name} remembered something important, but suddenly ${opponent.name}, in fear, hit the enemy's forearm.`,
            `${this.name} choked, and for that ${opponent.name} with fear delivered a direct knee blow to the enemy's forehead.`,
            `${this.name} forgot, but at that time the impudent ${opponent.name}, having made a willful decision, approached silently from behind and struck.`,
            `${this.name} came to his senses, but unexpectedly ${opponent.name} accidentally dealt a powerful blow.`,
        ];

        const logIndex = Math.floor(Math.random() * logs.length);
        const log = logs[logIndex];

        const logElement = document.createElement('div');
        logElement.textContent = `${log} | Damage: ${Math.abs(damage)} | Remaining health: ${opponent.health}`;
        document.getElementById('logs').prepend(logElement);
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
        const { progressBar, healthText } = this.elementIds;
        const progressBarElement = document.getElementById(progressBar);
        const healthTextElement = document.getElementById(healthText);
        const healthPercentage = (this.health / 100) * 100;
        
        progressBarElement.style.width = `${healthPercentage}%`;
        healthTextElement.textContent = `${this.health} / 100`;

        if (this.health > 50) {
            progressBarElement.classList.remove("low", "critical");
        } else if (this.health > 20) {
            progressBarElement.classList.add("low");
            progressBarElement.classList.remove("critical");
        } else {
            progressBarElement.classList.add("critical");
        }
    }

    // Метод для атаки іншого покемона
    attack(opponent) {
        const damage = this.randomDamage(-20, -5);
        const selfDamage = this.randomDamage(-10, 0);

        opponent.updateHealth(damage);
        this.updateHealth(selfDamage);

        this.logBattle(opponent, damage, selfDamage);
    }

    // Метод для випадкової шкоди
    randomDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Лог бою
    logBattle(opponent, damage, selfDamage, totalKickClicks, totalSecondAttackClicks) {
        const logs = [
            `${this.name} remembered something important, but suddenly ${opponent.name}, in fear, hit the enemy's forearm.`,
            `${this.name} choked, and for that ${opponent.name} with fear delivered a direct knee blow to the enemy's forehead.`,
            `${this.name} forgot, but at that time the impudent ${opponent.name}, having made a willful decision, approached silently from behind and struck.`,
            `${this.name} came to his senses, but unexpectedly ${opponent.name} accidentally dealt a powerful blow.`,
        ];

        const logIndex = Math.floor(Math.random() * logs.length);
        const log = logs[logIndex];

        const logElement = document.createElement('div');
        logElement.textContent = `${log} | Damage: ${Math.abs(damage)} | Remaining health: ${opponent.health} | Total Kick clicks: ${totalKickClicks} | Total Second Attack clicks: ${totalSecondAttackClicks}`;
        document.getElementById('logs').prepend(logElement);
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

// Функція замикання для лічильника натискань
const clickCounter = (maxClicks) => {
    let clicks = 0;
    return () => {
        if (clicks < maxClicks) {
            clicks++;
            return true; // Повертаємо true, якщо натискань ще можна робити
        } else {
            return false; // Повертаємо false, якщо більше натискати не можна
        }
    };
};

// Підрахунок загальної кількості кліків
let totalKickClicks = 0;
let totalSecondAttackClicks = 0;

// Створюємо обробники натискань для кожної кнопки з обмеженням у 6 натискань
const kickCounter = clickCounter(6);
const secondAttackCounter = clickCounter(6);

document.getElementById('btn-kick').addEventListener('click', () => {
    if (kickCounter()) {
        pikachu.attack(charmander);
        totalKickClicks++; // Збільшуємо лічильник натискань для кнопки "Kick"
        console.log(`Total Kick clicks: ${totalKickClicks}`);
    } else {
        alert(`Максимальна кількість натискань досягнута для кнопки "Kick".`);
    }
});

document.getElementById('btn-second-attack').addEventListener('click', () => {
    if (secondAttackCounter()) {
        charmander.attack(pikachu);
        totalSecondAttackClicks++; // Збільшуємо лічильник натискань для кнопки "Second Attack"
        console.log(`Total Second Attack clicks: ${totalSecondAttackClicks}`);
    } else {
        alert(`Максимальна кількість натискань досягнута для кнопки "Second Attack".`);
    }
});
