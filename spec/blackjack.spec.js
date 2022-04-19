const Blackjack = require('../src/blackjack.js')
const Player = require('../src/player.js')
const CardDeck = require('../src/card_deck.js')

describe('blackjack', () => {
  it('adding a player', () => {
    const cardDeck = new CardDeck()
    const blackjack = new Blackjack(cardDeck)

    const result = blackjack.addPlayerToGame(1, 'playerOne', 1000)

    expect(result).toEqual(new Player(1, 'playerOne', 1000))
    expect(blackjack.playerArray.length).toEqual(1)
  })

  it('adding 2 players', () => {
    const cardDeck = new CardDeck()
    const blackjack = new Blackjack(cardDeck)

    blackjack.addPlayerToGame(1, 'playerOne', 1000)
    blackjack.addPlayerToGame(2, 'playerTwo', 5000)
    const result = blackjack.playerArray

    expect(result).toEqual([
      new Player(1, 'playerOne', 1000),
      new Player(2, 'playerTwo', 5000)
    ])
    expect(blackjack.playerArray.length).toEqual(2)
  })

  it('set-up hand for Player', () => {
    const blackjack = new Blackjack()
    const playerOne = blackjack.addPlayerToGame(1, 'playerOne', 1000)

    blackjack.dealACardToAPlayerID(1)
    blackjack.dealACardToAPlayerID(1)

    expect(blackjack.playerArray.length).toEqual(1)
    expect(playerOne.hand.length).toEqual(2)
    expect(blackjack.deck.cardDeck.length).toEqual(50)
  })

  it('set-up hand for Player that does not exist', () => {
    const blackjack = new Blackjack()
    const playerTwo = blackjack.addPlayerToGame(2, 'playerOne', 1000)

    blackjack.dealACardToAPlayerID(1)
    blackjack.dealACardToAPlayerID(1)

    expect(blackjack.playerArray.length).toEqual(1)
    expect(playerTwo.hand.length).toEqual(0)
    expect(blackjack.deck.cardDeck.length).toEqual(52)
  })

  it('set-up hand for two Players', () => {
    const blackjack = new Blackjack()
    const playerOne = blackjack.addPlayerToGame(1, 'playerOne', 1000)
    const playerTwo = blackjack.addPlayerToGame(2, 'playerOne', 1000)

    blackjack.dealACardToAPlayerID(1)
    blackjack.dealACardToAPlayerID(1)
    blackjack.dealACardToAPlayerID(2)
    blackjack.dealACardToAPlayerID(2)

    expect(blackjack.playerArray.length).toEqual(2)
    expect(playerOne.hand.length).toEqual(2)
    expect(playerTwo.hand.length).toEqual(2)
    expect(blackjack.deck.cardDeck.length).toEqual(48)
  })
})
