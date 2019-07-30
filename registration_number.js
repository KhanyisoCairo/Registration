function registrationFactory(regNum) {
    var regNumbers = regNum || [];



    function addRegistration(loc) {
        if (!regNumbers.includes(loc)) {
            regNumbers.push(loc);
        }


    }
    function getRegistration() {
        return regNumbers

    }
    function filter(reg) {
        var filterTown = [];
         
        for (var i = 0; i < regNumbers.length; i++) {
            if (regNumbers[i].startsWith(reg)) {
                filterTown.push(regNumbers[i]);
            }
        }
    
        return filterTown;
    }



    return {

        registration: addRegistration,
        getRegistration,
        filter

    }

}


