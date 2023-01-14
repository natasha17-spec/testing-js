const {db,closeConnection}= require('./dbConnection');
const {createCart} =require('./cart');

test('createCart creates a cart for username', (done)=>{
    db('carts')
        .truncate()//удаляет все строки в таблице carts
        .then(()=>createCart('Lucas da Costa'))
        .then(()=>db.select('username').from('carts'))
        .then((result)=>expect(result).toEqual([{username: 'Lucas da Costa'}]))//выбирает значение usernsme в столбце всех записей в таблице carts
        .then(closeConnection)//уничтожает пулл соединений
        .then(done)
})