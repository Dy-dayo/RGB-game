const characterData = {
    hero:    {
                name: "Wizard",
                avatar: "images/wizard.png",
                health: 60,
                diceCount: 3,
                currentDiceScore:[]
            },
    orc:    {
                name: "Orc",
                avatar: "images/orc.jpg",
                health: 30,
                diceCount: 1,
                currentDiceScore:[]
            },
    demon:  {
                name: "Demon",
                avatar: "images/demon.png",
                health: 25,
                diceCount: 2,
                currentDiceScore: []
            },
    goblin: {
                name: "Goblin",
                avatar: "images/goblin.png",
                health: 20,
                diceCount: 3,
                currentDiceScore: []
            }
}


function getDiceRollArray(diceCount) {
    const newDiceRolls = new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
    return newDiceRolls
}

function getDicePlaceholderHtml(diceCount){
    const dicePlaceholder = new Array(diceCount).fill(0).map(()=>{
        return `<div class="placeholder-dice"></div>`
    }).join('') /// you can remove the .join() and put it at this.diceArray
    return dicePlaceholder
}

const getPercentage = (remainingHealth, maximumHealth)=>{
    return (remainingHealth *100)/maximumHealth
}

export {characterData, getDiceRollArray, getDicePlaceholderHtml, getPercentage}
