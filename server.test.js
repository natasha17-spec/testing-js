const {app, resetState} = require("./server");
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

beforeEach(() => resetState());
afterAll(() => app.close());

test("adding items to a cart", async () => {
    const initialItemsResponse = await getItems("lucas");
    expect(initialItemsResponse.status).toBe(404);

    const addItemResponse = await addItem("lucas", "cheesecake");
    expect(await addItemResponse.json()).toEqual(["cheesecake"]);

    const finalItemsResponse = await getItems("lucas");
    expect(await finalItemsResponse.json()).toEqual(["cheesecake"]);
});

test("remove items to a cart", async () => {
    const addItemResponse = await addItem("lucas", "cheesecake");
    expect(await addItemResponse.json()).toEqual(["cheesecake"]);

    await removeItems("lucas", "cheesecake");

    const removeItemsResponse = await getItems("lucas");
    expect(await removeItemsResponse.json()).toEqual([]);
});