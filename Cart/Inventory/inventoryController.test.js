const { inventory, addToInventory } = require('./inventoryController');

beforeEach(async() =>{
    inventory.set('cheesecake', 0);
})

test('cancel operation for invalid quantities', () => {
    expect.hasAssertions();
   try {
       addToInventory('cheesecake','not a number');
   } catch (e) {
       expect(inventory.get('cheesecake')).toBe(0);
   }
   expect(Array.from(inventory.entries())).toHaveLength(1)
});