class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    constructor() {
        super();

        let amount = 0;

        this.getAmount = function () {
            return amount;
        }

        this.setAmount = function (newAmount) {
            amount = newAmount;
        }
    }

    addToAmount(value) {
        this.setAmount(this.getAmount() + value);
        return this;
    }

    reduceFromAmount(value) {
        this.setAmount(this.getAmount() - value);
        return this;
    }

    getAmount() {
        return super.getAmount() + this.getAmount();
    }

}

class CreditMethod extends PaymentMethod {
    constructor() {
        super();

        let amount = 0;

        this.getAmount = function () {
            return amount;
        }

        this.setAmount = function (newAmount) {
            amount = newAmount;
        }
    }

    addToAmount(value) {
        this.setAmount(this.getAmount() + (9 / 10) * value);
        return this;
    }

    reduceFromAmount(value) {
        this.setAmount(this.getAmount() - value);
        return this;
    }

    getAmount() {
        return super.getAmount() + this.getAmount();
    }
}

const cashAccount = new CashMethod();
cashAccount.getAmount(); // returns “Your amount in the account is: 0”
cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
console.log(cashAccount.getAmount()); // returns “Your amount in the account is: 140”

const creditAccount = new CreditMethod();
creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
console.log(creditAccount.getAmount()); // returns “Your amount in the account is: 90”;