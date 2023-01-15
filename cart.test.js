const {db, closeConnection} = require('./dbConnection');
const {createCart, addItem} = require('./cart');

beforeEach(async() =>{
    await db('carts_items').truncate()
    await db('carts').truncate()
})
afterAll(async () => {await closeConnection()});

test('createCart creates a cart for username', (done) => {
    db('carts')
        .then(() => createCart('Lucas da Costa'))
        .then(() => db.select('username').from('carts'))
        .then((result) => expect(result).toEqual([{username: 'Lucas da Costa'}]))//выбирает значение usernsme в столбце всех записей в таблице carts
        .then(done)
});

test('addItem adds an item to a cart', async () => {

    const username = 'Lucas da Costa';
    await createCart(username);
    const {id: cartId} = await db
        .select()
        .from('carts')
        .where({username})
    await addItem(cartId, 'cheesecake');
    const results = await db.select('itemName').from('carts_items');
    expect(results).toEqual([{cartId, itemName: 'cheesecake'}])
})