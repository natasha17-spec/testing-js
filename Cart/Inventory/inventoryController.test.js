const {inventory, addToInventory, getInventory} = require('./inventoryController');

beforeEach(async () => {
    inventory.set('cheesecake', 0);
})

test("inventory contents", () => {
    inventory
        .set('cheesecake', 1)
        .set('macaroon', 3)
        .set('croissant', 3)
        .set('eclaire', 7)
    const result = getInventory()
    expect(result).toEqual({
        cheesecake: 1, macaroon: 3, croissant: 3, eclaire: 7
    })
});

test('cancel operation for invalid quantities', () => {
    try {
        addToInventory('cheesecake', 'not a number').not.toThrow();
    } catch (e) {
        expect(inventory.get('cheesecake')).toBe(0);
    }
    expect(Array.from(inventory.entries())).toHaveLength(1)
});

test('returned value', () => {
    const result = addToInventory('cheesecake', 2);
    expect(result).toBe(2)
});