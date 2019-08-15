var getRegistrationElem = document.querySelector(".textName");
var addBtnElem = document.querySelector(".submBtn");
var showBtnElem = document.querySelector(".showBtn");
var filterElem = document.querySelector(".radioBtn");
var displayRegElem = document.querySelector(".regNumbers")


let data = JSON.parse(localStorage.getItem("registration"))

var factoryInstance = RegistrationFactory();

function createRegNumbers(regNum) {
    var li = document.createElement('li');
    li.innerHTML = regNum
    var regNumber = document.querySelector(".regNumbers");
    regNumber.appendChild(li)
}
function createRegPlates(foundRegArray) {
    displayRegElem.innerHTML = "";
    foundRegArray.forEach(currentRegNumber => {
        createRegNumbers(currentRegNumber);
    });
}


// function show() {
//     var li = document.createElement('li');
//     li.innerHTML = factoryInstance.filter();
//     // li.innerHTML = showBtnElem.value;
//     displayRegElem.appendChild(li)
// }

function showBtn() {
    var regNum = document.querySelector("input[name ='RegNumber']:checked");

    if (regNum !== "") {
        var regis = regNum.value;
        createRegPlates(factoryInstance.filter(regis))
    }
}
function addBtnClicked() {

    if (getRegistrationElem.value !== "") {
        factoryInstance.registration(getRegistrationElem.value)

        createRegPlates(factoryInstance.getRegistration());
        localStorage.setItem('registration', JSON.stringify(factoryInstance.eachReg()))
    }
}
addBtnElem.addEventListener("click", addBtnClicked)
showBtnElem.addEventListener("click", showBtn);

window.addEventListener('DOMContentLoaded', (event) => {

    //  factoryInstance.filter();

});