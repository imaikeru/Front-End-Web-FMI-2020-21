class Item {
    basePrice = 1000;
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }

    getBasePrice() {
        return this.basePrice;
    }

    getPriceAfterDiscount() {
        return this.getBasePrice() * (1 - (this.discount / 100));
    }
}

let iceCream = new Item("Ice cream", 33);
let banana = new Item("Banana", 40);

console.log(iceCream.getPriceAfterDiscount());
console.log(banana.getPriceAfterDiscount());