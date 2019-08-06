function registrationFactory(regNum) {
    var regNumbers = regNum || [];
 
    var newReg;

    function addRegistration(loc) {
        var upCase = loc.toUpperCase();
          newReg = upCase
        if (!regNumbers.includes(upCase)) {
            regNumbers.push(upCase);
        }


    }
    function getRegistration() {
        return regNumbers

    }
    function filter(reg) {
        var filterTown = [];
         if(reg === undefined || reg === ""){
            return regNumbers;


         }
        for (var i = 0; i < regNumbers.length; i++) {
            if (regNumbers[i].startsWith(reg)) {
                filterTown.push(regNumbers[i]);
            }
        }
    
        return filterTown;
    }

function eachReg(){
    return newReg;
}

    return {

        registration: addRegistration,
        getRegistration,
        filter,
        eachReg

    }

}


