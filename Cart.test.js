const Cart = require('./Card')
const assert = require('assert')

const cart = new Cart();
cart.addToCard('cheesecake');
cart.removeItemCart('cheesecake')
assert.deepStrictEqual(cart.items,[])


