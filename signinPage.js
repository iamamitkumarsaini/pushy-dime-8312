document.getElementById("navbarImage").addEventListener("click",navbarImageFunc);

function navbarImageFunc(){
    window.location.href = "index.html"
};

document.getElementById("navbarSignupBtn").addEventListener("click",navbarSignupFunc);

function navbarSignupFunc (){
    window.location.href = "signupPage.html"
};


document.getElementById("navbarSigninBtn").addEventListener("click",navbarSigninFunc);

function navbarSigninFunc(){
    window.location.href = "signinPage.html"
};



document.getElementById("signinBtn").addEventListener("click",signinFunc)

let signinArr = JSON.parse(localStorage.getItem("signupData")) || [];

function signinFunc(){
    let signinObj = {
        sMail:document.getElementById("signinmail").value,
        sPassword:document.getElementById("signinpassword").value
    }

    signinCheckFunc(signinObj)
};


function signinCheckFunc(signinObj){

    let flag = true;

    signinArr.forEach(function (elem){
        if (signinObj.sMail == elem.mail  && signinObj.sPassword == elem.password){
            console.log("amit")
            localStorage.setItem("signedinDetails",JSON.stringify(elem))
            document.getElementById("signinBtn").style.backgroundColor = "#1a73e8";
            document.getElementById("signinBtn").style.color = "white"
            window.location.href = "index.html"
             flag= false;
        }
    })

    if (flag == true){
        alert("Wrong Input Details");
    }
}