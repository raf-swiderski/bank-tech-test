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
    //Logs the bank statement to the console
    statement() {
        let statement = this.transactions.reverse();
        console.log("date || credit || debit || balance");
        // Each 'forEach' iteration is one transaction (or one hash in the array)
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
            //  One  conditional has the '||' in a different place, 
            //  to indicate whether the transactions  was debit or credit.
        })
    };
    
}
