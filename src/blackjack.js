const Player = require('./player')
const CardDeck = require('./card_deck')

const cardValue = {
  14: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 10,
  12: 10,
  13: 10
}
class Blackjack {
  constructor(cardDeck) {
    this.cardDeck = cardDeck
    this.playerArray = []
  }

  addPlayerToGame(id, playerName, wallet) {
    const player = new Player(id, playerName, wallet)
    this.playerArray.push(player)
    return player
  }

  dealACardToAPlayerID(id) {
    for (let i = 0; i < this.playerArray.length; i++) {
      const player = this.playerArray[i]
      if (id === player.id) {
        const card = CardDeck.dealCard()
        player.hand.push(card)
      } else {
        return false
      }
    }
  }

  countScore(hand) {
    //sum of cardArray
    //if card array has an A (=1) and the sum + 10 is under 22, return sum = sum + 10 and sumLow = sum
    //if card array has an A (=1) and the sum + 10 is over 22, return sumLow
    //else return sum
  }

  isBust(hand) {
    //if count score is 22 or above, return true
    //else return false
  }

  isTwentyOne(hand) {
    //if countScore = 21 and cardArray.length = 2, return blackjack
    //if countScore = 21, return twentyOne
    //if countScore != 21, return false
  }

  doesPlayerWin() {
    //compare each Player to Dealer
  }
}

module.exports = Blackjack
