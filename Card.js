class Cart {
    constructor() {
        this.items = []
    }
    addToCard(item){
        this.items.push(item)
    }
}

module.exports = Cart;