describe("Account", function() {
    var account;

    beforeEach(function(){
        account = new Account();
    });

    it("should return the current balance", function() {
        expect(account.balance).toEqual(0);
    });
    it("should add to the balance with a deposit of money", function(){
        account.deposit(1000, "10-01-2012");
        expect(account.balance).toEqual(1000);
    });
    it("should withdraw from the balance with a withdrawal of money", function(){
        account.deposit(1000, "13-01-2012");
        account.withdraw(501, "14-01-2012");
        expect(account.balance).toEqual(499);
    });

    it("should be able to record deposits", function() {
        account.deposit(10, "11-01-2012");
        account.deposit(200, "12-01-2012");
        expect(account.transactions).toEqual([ 
            { "type": "credit", "amount": 10, "date": "11-01-2012", "balance": 10 },
            { "type": "credit", "amount": 200, "date": "12-01-2012", "balance": 210 }
        ]);
    });

    it("should be able to record withdrawals", function() {
        account.deposit(200, "12-01-2012");
        account.withdraw(40, "13-01-2012");
        account.withdraw(100, "14-01-2012");
        expect(account.transactions).toEqual([ 
            { "type": "credit", "amount": 200, "date": "12-01-2012", "balance": 200 },
            { "type": "debit", "amount": 40, "date": "13-01-2012", "balance": 160 },
            { "type": "debit", "amount": 100, "date": "14-01-2012", "balance": 60 }
        ]);
    });

    // it("should be able to print a bank statement", function() {
    //     account.deposit(200, "12-01-2012");
    //     account.withdraw(40, "13-01-2012");
    //     account.withdraw(100, "14-01-2012");
    //     expect(account.statement).toEqual(
            
    //     )
    // }
});