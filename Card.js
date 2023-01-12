class Cart {
    constructor() {
        this.items = []
    }
    addToCard(item){
        this.items.push(item)
    }
    removeItemCart(item){
        console.log(item)
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] === item){
                console.log(this.items[i] === item)
                this.items.splice(i,1)
            }
        }
    }
}

module.exports = Cart;