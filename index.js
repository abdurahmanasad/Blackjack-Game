let player = {
    name: "Durie",
    chips: 200

}
let cards = []
let sum = 0
let gotBlackJack = false
let isAlive = false
let message = ""
//hasDrawnNewCard = false
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// let playerName = "Durie"
// let playerChips = 145


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumbers = Math.floor((Math.random() * 13) + 1)
    if (randomNumbers == 1) {
        return 11
    } else if (randomNumbers == 11|| randomNumbers == 12|| randomNumbers ==13) {
        return 10
    }else {
        return randomNumbers
    }
    
}
console.log(getRandomCard())

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }

    sumEl.textContent = "Sum: " + sum

    // if (hasDrawnNewCard === true){
    //     cardsEl.textContent +=  " " + extraCard
    // }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        gotBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!") 
    if (isAlive ===true && gotBlackJack ==false) {
        
    }
    let extraCard = getRandomCard()
    sum += extraCard
    //hasDrawnNewCard = true
    cards.push(extraCard)
    renderGame() 
    
    //console.log(cardsEl.textContent)

}



