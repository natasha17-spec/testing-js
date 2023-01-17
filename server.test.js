const {app, inventory, carts} = require("./server");
const fetch = require("isomorphic-fetch");

const apiRoot = "http://localhost:3000";

const addItem = (username, item) => {
    return fetch(`${apiRoot}/carts/${username}/items/${item}`, {
        method: "POST"
    });
};

const getItems = username => {
    return fetch(`${apiRoot}/carts/${username}/items`, {method: "GET"});
};

const removeItems = (username, item) => {
    return fetch(`${apiRoot}/carts/${username}/items/${item}`, {method: "DELETE"});
};


afterAll(() => app.close());
describe('AddItem', () => {
    test("adding items to a cart", async () => {
        inventory.set('cheesecake', 1)
        const initialItemsResponse = await addItem('lucas','cheesecake');
        expect(await initialItemsResponse.json()).toEqual(['cheesecake']);

        expect(inventory.get('cheesecake')).toBe(0);
        expect(carts.get('lucas')).toEqual(['cheesecake']);

        const failedAddItem = await addItem('lucas','cheesecake');
        expect(failedAddItem.status).toBe(404)
    });
})


test("remove items to a cart", async () => {
    const addItemResponse = await addItem("lucas", "cheesecake");
    expect(await addItemResponse.json()).toEqual(["cheesecake"]);

    await removeItems("lucas", "cheesecake");

    const removeItemsResponse = await getItems("lucas");
    expect(await removeItemsResponse.json()).toEqual([]);
});