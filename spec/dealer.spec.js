const Blackjack = require('../src/blackjack.js')
const Dealer = require('../src/dealer.js')

describe('dealer', () => {
    it(' takes a card if their score is less than 16', () => {
    const blackjack = new Blackjack()

    const result = blackjack.dealerPlaysHand()

    expect(result).toBeGreaterThan(16)
  })
})

