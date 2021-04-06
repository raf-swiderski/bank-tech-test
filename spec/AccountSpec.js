describe("Account", function() {
    var account;

    beforeEach(function(){
        account = new Account();
    });

    it("should return the current balance", function() {
        expect(account.balance).toEqual(0);
    });
    it("should add to the balance with a deposit of money", function(){
        account.deposit(1000);
        expect(account.balance).toEqual(1000);
    });
    it("should withdraw from the balance with a withdrawal of money", function(){
        account.deposit(1000);
        account.withdraw(501);
        expect(account.balance).toEqual(499);
    });
});