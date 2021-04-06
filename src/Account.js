class Account {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    //credit
    deposit = (amount, date) => {
        this.balance += amount
        this.transactions.push(
            { "type": "credit", "amount": amount, "date": date, "balance": this.balance }
            );
    }
    //debit
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
/*
let account = new Account();
account.deposit(200, "12-01-2012");
account.withdraw(40, "13-01-2012");
account.withdraw(100, "14-01-2012");
*/