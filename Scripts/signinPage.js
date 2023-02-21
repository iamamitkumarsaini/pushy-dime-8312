let signinBtn = document.getElementById("signinBtn");

let signinArr = JSON.parse(localStorage.getItem("signupData")) || [];
let sMail = document.getElementById("signinmail");
let sPassword = document.getElementById("signinpassword");

let eyeicon1 = document.getElementById("eyeicon1");
let eyeicon2 = document.getElementById("eyeicon2");

eyeicon1.addEventListener("click",showPasswordFunc);
eyeicon2.addEventListener("click",hidePasswordFunc);

function showPasswordFunc(){
    eyeicon1.style.display = "none";
    eyeicon2.style.display = "block"

    sPassword.type = "text";
}

function hidePasswordFunc(){
    eyeicon1.style.display = "flex";
    eyeicon2.style.display = "none"

    sPassword.type = "password";
}




sMail.addEventListener("input",checkForText)
sPassword.addEventListener("input",checkForText)

function checkForText(){
    if(sMail.value !=="" && sPassword.value !==""){
        signinBtn.disabled = false
        signinBtn.style.backgroundColor = "#1a73e8"
        signinBtn.style.color = "#fff"
    }
    else{
        signinBtn.disabled = true;
        signinBtn.style.backgroundColor = "rgba(192,192,192,0.7)"
        signinBtn.style.color = "rgba(150,150,150,1)"
    }
}


signinBtn.addEventListener("click",signinFunc);

function signinFunc(){
    let signinObj = {
        sMail:sMail.value,
        sPassword:sPassword.value
    }
        signinCheckFunc(signinObj)
};


function signinCheckFunc(signinObj){

    let flag = true;

    signinArr.forEach(function (elem){
        if (signinObj.sMail == elem.mail  && signinObj.sPassword == elem.password){
            localStorage.setItem("signedinDetails",JSON.stringify(elem))
            return flag=false;
        }
    })

    if (flag == true){
        alert("Wrong Input Details");
    }

    else{
        sMail.value = "";
        sPassword.value = "";
        setTimeout(() => {
            window.location = "index.html"
        },1200)
    }
}