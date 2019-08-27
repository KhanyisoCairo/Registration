var getRegistrationElem = document.querySelector(".textName");
var addBtnElem = document.querySelector(".submBtn");
var showBtnElem = document.querySelector(".showBtn");
var filterElem = document.querySelector(".radioBtn");
var displayRegElem = document.querySelector(".regNumbers");
var errorElem = document.querySelector(".msg");

var data;
if (localStorage.getItem("registration") !== undefined) {
    data = JSON.parse(localStorage.getItem("registration"))
}

var factoryInstance = RegistrationFactory(data);

window.onload = function () {
    createRegPlates(factoryInstance.getRegistration());
};

function clearMsg() {
    setTimeout(function () {
        errorElem.innerHTML = "";
    }, 2000);
}

function createRegNumbers(regNum) {
    var li = document.createElement('li');
    li.innerHTML = regNum;
    var regNumber = document.querySelector(".regNumbers");
    regNumber.appendChild(li)
}
function createRegPlates(foundRegArray) {
    displayRegElem.innerHTML = "";
    foundRegArray.forEach(currentRegNumber => {
        createRegNumbers(currentRegNumber);
    });
}




function showBtn() {
    var regNum = document.querySelector("input[name ='RegNumber']:checked");

    if (regNum !== "") {
        var regis = regNum.value;
        createRegPlates(factoryInstance.filter(regis))
    }
}
function addBtnClicked() {

    if (getRegistrationElem.value === "") {

        clearMsg();
        errorElem.innerHTML = "Please enter a valid registration"
        errorElem.classList.remove("green");
        errorElem.classList.add("red");
    } else if (factoryInstance.checkExist(getRegistrationElem.value)) {

        clearMsg();
        errorElem.innerHTML = "Already Been Added"
        errorElem.classList.remove("green");
        errorElem.classList.add("red");

    } else {
        clearMsg();
        var result = factoryInstance.registration(getRegistrationElem.value)

        if (!result) {
            createRegPlates(factoryInstance.getRegistration());
            localStorage.setItem('registration', JSON.stringify(factoryInstance.getRegistration()))

            if (errorElem != result) {

                errorElem.innerHTML = "Successfuly Added"
                errorElem.classList.remove("red");
                errorElem.classList.add("green");

            }
        } else {
            errorElem.innerHTML = result;
        }
    }
}
addBtnElem.addEventListener("click", addBtnClicked)
showBtnElem.addEventListener("click", showBtn);

window.addEventListener('DOMContentLoaded', (event) => {

    factoryInstance.filter();

});