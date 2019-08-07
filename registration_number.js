function registrationFactory(regNum) {
    var regNumbers = regNum || [];

    var newReg;
    var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
    var error = "";

    function showError() {

        return error;
    }

    function addRegistration(loc) {
        error = ""
        var upCase = loc.toUpperCase().trim();
        var myTest = regex.test(upCase);


        if (upCase.length > 0 && upCase.length <= 10 && myTest == false) {
            if (upCase.startsWith("CA") || upCase.startsWith("CY") || upCase.startsWith("CF")) {
                if (!regNumbers.includes(upCase)) {
                    regNumbers.push(upCase);

                    if (regNumbers[upCase] === undefined) {

                        regNumbers[upCase] = 0;
                    }
                } else {
                    error = "Already Been Added"
                }

            } else {
                error = "Registration Number not from Given Location"
            }
        } else {
            error = "Not A Valid Registration"
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
        showError

    }
}

