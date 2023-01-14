const Cart = require('./Card')

test('The addToCart function can add an item to the cart',()=>{
    const cart = new Cart();
    cart.addToCard('cheesecake');
    expect(cart.items).toEqual(['cheesecake'])
})

test('The removeFromCart function can remove an item to the cart',()=>{
    const cart = new Cart();
    cart.addToCard('cheesecake');
    cart.removeItemCart('cheesecake');
    expect(cart.items).toEqual([])
})