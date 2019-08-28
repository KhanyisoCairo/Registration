function RegistrationFactory(arr) {
    var regNumbers = arr || [];
    var newReg;
    var regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/i;
    var errorMessage = "";

    function clear() {

        regNumbers = [];
    }

    function showError() {
        return "Please enter valid registration"
    }

    function checkDuplicates(testNum) {
        return regNumbers.includes(testNum.toUpperCase());
    }


    function initialize() {
        var initial = [];
        initial = ["CA 321541", "CF 321541"];
        return initial;
    }


    function validate(plate) {
        return regex.test(plate);
    }

    function addRegistration(loc) {
        var upCase = loc;
        var upCase2 = loc.toUpperCase().trim();
        var myTest = regex.test(upCase2);

        if (upCase2.length > 0 && upCase2.length <= 10 && myTest === true) {

            if (upCase2.startsWith("CA ") || upCase2.startsWith("CY ") || upCase2.startsWith("CF ")) {
                if (regNumbers.includes(upCase2) === false) {
                    regNumbers.push(upCase2);
                }
                else if (regNumbers.includes(upCase) === true) {
                    return ("Already Been Added");
                }
            }
            else {
                return ("Registration Number not from Given Location");
            }
        }
        else {
            return ("Not A Valid Registration");
        }
    }

    function getRegistration() {
        return regNumbers

    }

    function filter(reg) {
        var filterTown = [];
        if (reg === undefined || reg === "") {
            return regNumbers;
        }
        for (var i = 0; i < regNumbers.length; i++) {
            if (regNumbers[i].startsWith(reg)) {
                filterTown.push(regNumbers[i]);
            }
        }
        return filterTown;
    }

    function eachReg() {
        return newReg;
    }

    return {

        registration: addRegistration,
        getRegistration,
        filter,
        eachReg,
        showError,
        checkExist: checkDuplicates,
        validate,
        initialize,
        clear

    }
}

