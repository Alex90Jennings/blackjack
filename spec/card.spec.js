const Card = require('../src/card.js')

describe('card', () => {
  it('create a card', () => {
    const card = new Card(7, 'Hearts')
    expect(card.number).toEqual(7)
    expect(card.suit).toEqual('Hearts')
  })
})
