class Account {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    deposit = (amount, date) => {
        this.balance += amount
        this.transactions.push(
            { "type": "credit", "amount": amount, "date": date, "balance": this.balance }
            );
    }
    withdraw = (amount, date) => {
        this.balance -= amount
        this.transactions.push(
            { "type": "debit", "amount": amount, "date": date, "balance": this.balance }
            );
    }
    statement() {
        let statement = this.transactions.reverse();
        console.log("date || credit || debit || balance");
        statement.forEach(function(transaction) {
            if (transaction["type"] === "credit") {
                console.log(
                    transaction["date"]
                    + " || " + 
                    transaction["amount"] 
                    + " || || " + 
                    transaction["balance"]);
                
            } else {
                console.log(
                    transaction["date"]
                    + " || || " + 
                    transaction["amount"] 
                    + " || " + 
                    transaction["balance"]);
              
            };
        })
    };
    
}
