describe("Account", function() {
    var account;

    beforeEach(function(){
        account = new Account();
    });

    it("should return the current balance", function() {
        expect(account.balance).toEqual(0)
    });
});