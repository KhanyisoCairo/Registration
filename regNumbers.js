function RegistrationFactory(arr1) {
    var regNumbers1 = arr1 || [];
    var newReg1;
    var regex = /[A-Z]{2}\s[0-9]{3}\s[0-9]{3}/i;
    var errorMessage = "";

    function clear() {

        regNumbers1 = [];
    }

    function showError() {
        return "Please enter valid registration"
    }

    function checkDuplicates(testNum) {
        return regNumbers1.includes(testNum.toUpperCase());
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
                if (regNumbers1.includes(upCase2) === false) {
                    regNumbers1.push(upCase2);
                }
                else if (regNumbers1.includes(upCase) === true) {
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
        return regNumbers1

    }

    function filter(reg) {
        var filterTown = [];
        if (reg === undefined || reg === "") {
            return regNumbers1;
        }
        for (var i = 0; i < regNumbers1.length; i++) {
            if (regNumbers1[i].startsWith(reg)) {
                filterTown.push(regNumbers1[i]);
            }
        }
        return filterTown;
    }

    function eachReg() {
        return newReg1;
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

