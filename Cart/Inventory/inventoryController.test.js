const { inventory, addToInventory } = require('./inventoryController');

beforeEach(async() =>{
    inventory.set('cheesecake', 0);
})

test('cancel operation for invalid quantities', () => {
   try {
       addToInventory('cheesecake','not a number').not.toThrow();
   } catch (e) {
       expect(inventory.get('cheesecake')).toBe(0);
   }
   expect(Array.from(inventory.entries())).toHaveLength(1)
});

test('returned value', ()=> {
    const result = addToInventory('cheesecake', 2);
    expect(result).toBe(2)
});