describe('Registration Function', function () {
    it('should  Add to list ', function () {
        var getReg = registrationFactory();
        var results = getReg.registration("CA 44865");

        assert.deepEqual(getReg.getRegistration(), ["CA 44865"]);
    });

    it('should  add different numbers to the list ', function () {
        var getReg = registrationFactory();
        getReg.registration("CF 321541");
        getReg.registration("CJ 321541");

        assert.deepEqual(getReg.getRegistration(), ["CF 321541", "CJ 321541"]);
    });

    it('should not  Add to list if the number already exixst    ', function () {
        var getReg = registrationFactory();
        getReg.registration("CJ 55165");
        getReg.registration("CF 66622");
        getReg.registration("CJ 55165");


        assert.deepEqual(getReg.getRegistration(), ["CJ 55165", "CF 66622"]);
    });

    it('should  filter the town selected if Cape Town', function () {
        var getReg = registrationFactory();
        getReg.registration("CF 45481");
        getReg.registration("CA 54824");
        getReg.registration("CA 54865");

        assert.deepEqual(getReg.filter(), ["CA"]);
    });
    it('should  filter the town selected if Bellville  ', function () {
        var getReg = registrationFactory();
        getReg.registration("CJ 566565");
        getReg.registration("CJ 54531");
        getReg.registration("CY 51553");

        assert.deepEqual(getReg.filter(), ["CJ"]);
    });
    it('should  filter the town if selected Paarl ', function () {
        var getReg = registrationFactory();
        getReg.registration("CK 54565");
        getReg.registration("CF 66561");
        getReg.registration("CF 21564");

        assert.deepEqual(getReg.filter(), ["CF 66561", "CF 21564"]);
    });
    it('should  filter the town if selected Paarl ', function () {
        var getReg = registrationFactory();
        // getReg.registration("CF","54565");
        getReg.registration("CF 66561");
        getReg.registration("CF 21564");

        assert.deepEqual(getReg.filter(), ["CF"]);
    });

});