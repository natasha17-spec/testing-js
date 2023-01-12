const Cart = require('./testing-js/Card')

const cart = new Cart();
cart.addToCard('cheesecake')

const hasOneItem = cart.items.length === 1;
const hasACheeseCake = cart.items[0] === 'cheesecake'

if (hasACheeseCake && hasOneItem) {
    console.log('Cheesecake has been successful added')
} else {
    const actualContent = cart.items.join(',');
    console.log('The function didnt do what we expected' )
    console.error(`actual content: ${actualContent}` )
    throw new Error('Test failed')
}