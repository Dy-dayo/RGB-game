import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utilities.js"

export class Character {
    constructor(character) {
        Object.assign(this, character)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }
    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }
    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)

        const danger = percent <= 25 ? 'danger' : ''
        return `<div class= 'health-bar-outer'>
                    <div class="health-bar-inner ${danger}" 
                        style="width: ${percent}%;">
                    </div>
                </div>`
    }
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, currentAttackScore) => {
            return total + currentAttackScore
        })

        this.health = this.health - totalAttackScore

        if (this.health <= 0) {
            this.health = 0
            this.dead = true
        }

    }
    getCharacterHtml() {
        // const { elementId, name, avatar, health, diceCount } = this;
        const healthBar = this.getHealthBarHtml()

        let html = `<div class="character-card">
                        <h4 class="name"> ${this.name} </h4>
                        <img class="avatar" src="${this.avatar}" />
                        <div class="health">health: <b> ${this.health} </b></div>
                        ${healthBar}
                        <div class="dice-container">    
                            ${this.diceHtml}
                        </div>
                    </div>`
        return html
    }
}