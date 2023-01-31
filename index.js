import { characterData, } from "./utilities.js"
import { Character } from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"]

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

document.addEventListener('click', (e) => {
    if (e.target.id === "attack-button") {
        attack()
    }
})

function attack() {
    document.getElementById('hero').parentElement.classList.remove('mainScreen')
    monster.setDiceHtml()
    wizard.setDiceHtml()

    monster.takeDamage(wizard.currentDiceScore)
    wizard.takeDamage(monster.currentDiceScore)
    render()

    const attackBtn = document.getElementById('attack-button')

    if (monster.dead) {
        attackBtn.disabled = true
        if (monstersArray.length > 0) {
            setTimeout(() => {
                monster = getNewMonster()
                document.getElementById('hero').parentElement.classList.toggle('mainScreen')
                attackBtn.disabled = false
                
                render()
        },1000)
        } else { endGame() }
    } else if (wizard.dead) {
        attackBtn.disabled = true
        endGame()
    }


}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ? 'No Victors- all creatures are dead' :
        wizard.health === 0 ? 'The monsters are victorious' : 'The wizard is victorious'

    const endEmoji = wizard.health > 0 ? '🔮' : "☠️"
    setTimeout(() => {
        document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`

    }, 1500)


}

function render() {
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
}

let monster = getNewMonster()
const wizard = new Character(characterData.hero)
render()




