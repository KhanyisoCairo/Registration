function RegistrationFactory() {
    var regNumbers =  [];
    console.log(regNumbers)
    var newReg;
    var regex = /[!@#$%^&*();,.?"^$:^+=${'}`_;''"\[.*?\]|<>]/i
    var error = "";

    function showError() {

        return error;
    }
    function GetRegList (getList){
        var regList = ["CA ","CY ","CF"]
        var getNum = getList.split(" ");
        if(getNum.length > 2){
            return false;

        }

        var regii =  regList[0].trim();
        return regList.includes(regii);
    }


    function addRegistration(loc) {
        error = ""
        var upCase = loc.toUpperCase().trim();
        console.log(upCase)

        var myTest = regex.test(upCase);
        console.log(myTest)

        

        if (upCase.length > 0 && upCase.length <= 10 && myTest === false) {
           
            if (upCase.startsWith("CA ") || upCase.startsWith("CY ") || upCase.startsWith("CF ")) {
                if (!regNumbers.includes(upCase)) {
                    regNumbers.push(upCase);

                } 
                else {
                    error = "Already Been Added"
                }

            } else {
                error = "Registration Number not from Given Location"
            }
        } else {
            error = "Not A Valid Registration"
        }
         GetRegList(upCase);
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
 //    console.log(regNumbers)
    return {

        registration: addRegistration,
        getRegistration,
        filter,
        eachReg,
        showError

    }
}

