var getRegistrationElem = document.querySelector(".textName");
var addBtnElem = document.querySelector(".submBtn");
var showBtnElem = document.querySelector(".showBtn");
var filterElem = document.querySelector(".radioBtn");
var displayRegElem = document.querySelector(".regNumbers")

//let data = JSON.parse(localStorage.getItem("registration"));

var factoryInstance = registrationFactory();

  
// addBtnElem.innerHTML =factoryInstance.registration();
function showBtn(){
    var regNum = document.querySelector("input[name ='RegNumber']:checked");

    if (regNum) {
        var regis = regNum.value;
        displayRegElem.innerHTML =factoryInstance.filter(regis); 
   
    }

}

function addBtnClicked() {
    // console.log('chck')
    
    if (getRegistrationElem.value !== "") {
        factoryInstance.registration(getRegistrationElem.value)
        //displayRegElem.innerHTML = factoryInstance.getRegistration();

         

        //factoryInstance.filter();
        var li = document.createElement('li');
        li.innerHTML = getRegistrationElem.value;
        var regNumber = document.querySelector(".regNumbers");
        regNumber.appendChild(li)

//localStorage.setItem('registration', JSON.stringify(factoryInstance.registrationFactory()));
       
    }

    console.log(factoryInstance.getRegistration());

    
}


addBtnElem.addEventListener("click", addBtnClicked)
showBtnElem.addEventListener("click", showBtn);



// window.addEventListener('DOMContentLoaded', (event) => {

//   //  factoryInstance.filter();

// });