describe('Registration Function', function () {
    it('should  Add to list ', function () {
        var getReg = registrationFactory();
        getReg.registration("CA 44865");


        assert.deepEqual(getReg.getRegistration(), ['CA 44865']);
    });

    it('should  add different numbers to the list ', function () {
        var getReg = RegistrationFactory();
        getReg.registration("CA 321541");
        // getReg.registration("CF 321541");
        getReg.registration("CF 321541");

        // console.log(getReg.getRegistration())

        assert.deepEqual(getReg.getRegistration(), ["CA 321541", "CF 321541"]);
    });

    it('should not  Add to list if the number already exixst    ', function () {
        var getReg = RegistrationFactory();
        getReg.registration("CJ 55165");
        getReg.registration("CF 66622");
        getReg.registration("CJ 55165");


        assert.deepEqual(getReg.getRegistration(), ["CF 66622"]);
    });

    it('should  filter the town selected if Cape Town', function () {
        var getReg = RegistrationFactory();
        getReg.registration("CF 45481");
        getReg.registration("CA 54824");
        getReg.registration("CA 54865");

        assert.deepEqual(getReg.filter("CA"), ["CA 54824", "CA 54865"]);
    });
    it('should  filter the town selected if Bellville  ', function () {
        var getReg = RegistrationFactory();
        getReg.registration("CJ 566565");
        getReg.registration("CY 54531");
        getReg.registration("CY 51553");

        assert.deepEqual(getReg.filter("CY"), ["CY 54531", "CY 51553"]);
    });
    it('should  filter the town if selected Paarl ', function () {
        var getReg = RegistrationFactory();
        getReg.registration("CK 54565");
        getReg.registration("CF 66561");
        getReg.registration("CF 21564");

        assert.deepEqual(getReg.filter("CF"), ["CF 66561", "CF 21564"]);
    });
    it('should not add a registration if you dont enter registration number', function () {
        var getReg = RegistrationFactory();
        getReg.registration("");

        assert.deepEqual(getReg.getRegistration(), []);

    });
    it('should not add a registration if you dont enter re', function () {
        var getReg = RegistrationFactory();
        getReg.registration("");

        assert.deepEqual(getReg.getRegistration(), []);

    });


});