// Pokemon.js
class Pokemon {
    constructor(name, elementIds) {
        this.name = name;
        this.health = 100;
        this.elementIds = elementIds;
    }

    updateHealth(amount) {
        this.health = Math.max(0, this.health + amount);
        this.updateUI();
    }

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

    attack(opponent, totalKickClicks, totalSecondAttackClicks) {
        const damage = this.randomDamage(-20, -5);
        const selfDamage = this.randomDamage(-10, 0);

        opponent.updateHealth(damage);
        this.updateHealth(selfDamage);

        this.logBattle(opponent, damage, selfDamage, totalKickClicks, totalSecondAttackClicks);
    }

    randomDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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

        console.log(`Total Kick clicks: ${totalKickClicks}, Total Second Attack clicks: ${totalSecondAttackClicks}`);
    }
}

export default Pokemon;
