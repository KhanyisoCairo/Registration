var getRegElem = document.querySelector(".textName1");
var addbtnElem = document.querySelector(".submBtn1");
var showBtnElem = document.querySelector(".showBtn1");
var filterElem = document.querySelector(".radioBtn1");
// var showRegElem = document.querySelector(".regNumbers1");/
var showErrorElem = document.querySelector(".msg1");
var resetBtn = document.querySelector(".ResetBtn1");

var templateSource = document.querySelector(".userTemplate").innerHTML;

var userTemplate = Handlebars.compile(templateSource);
var userDataElem = document.querySelector(".regNumbers1");

var data;
if (localStorage.getItem("registrationTwo")) {
    data = JSON.parse(localStorage.getItem("registrationTwo"))
} else {
    data = []
}

var Instance = RegistrationFactory(data);

window.onload = function () {
    createRegPlatesTemp(Instance.getRegistration());
};

function clearMsg() {
    setTimeout(function () {
        showErrorElem.innerHTML = "";
    }, 2000);
}

function createRegNumbers(regNum) {
    var data = userTemplate({
        regNumbers:regNum,
       
    });
   
    userDataElem.innerHTML = data
    // var li = document.createElement('li');
    // li.innerHTML = regNum;
    // var regNumber = document.querySelector(".regNumbers1");
    // regNumber.appendChild(li)
}

function createRegPlatesTemp(foundRegArray) {
    
    userDataElem.innerHTML = "helooooo";
     
      
    var data = userTemplate({
        regNumbers:foundRegArray,
       
    });
   
    userDataElem.innerHTML = data
    // foundRegArray.forEach(currentRegNumber => {
    //     createRegNumbers(currentRegNumber);
    // });
};




function showBtn() {
    var regNum = document.querySelector("input[name ='RegNumber1']:checked");

    if (regNum !== "") {
        var regis = regNum.value;
        createRegPlatesTemp(Instance.filter(regis))
    }
}
function addBtnClicked() {

    if (getRegElem.value === "") {

        clearMsg();
        showErrorElem.innerHTML = "Please enter a valid registration"
        showErrorElem.classList.remove("green");
        showErrorElem.classList.add("red");
    } else if (Instance.checkExist(getRegElem.value)) {

        clearMsg();
        showErrorElem.innerHTML = "Already Been Added"
        showErrorElem.classList.remove("green");
        showErrorElem.classList.add("red");

    } else {
        clearMsg();
        var result = Instance.registration(getRegElem.value)
        if (!result) {
            createRegPlatesTemp(Instance.getRegistration());
            localStorage.setItem('registrationTwo', JSON.stringify(Instance.getRegistration()))

            if (showErrorElem != result) {

                showErrorElem.innerHTML = "Successfuly Added"
                showErrorElem.classList.remove("red");
                showErrorElem.classList.add("green");

            }
        } else {
            showErrorElem.innerHTML = result;
        }
    }

 
}

function reset() {

    window.location.reload()
    localStorage.removeItem('registrationTwo');
    getRegElem.innerHTML = "";
    showRegElem.innerHTML = "";

}


addbtnElem.addEventListener("click", addBtnClicked)
showBtnElem.addEventListener("click", showBtn);
resetBtn.addEventListener("click", reset);

window.addEventListener('DOMContentLoaded', (event) => {

    Instance.filter();

});


