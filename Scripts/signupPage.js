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




document.getElementById("continueBtn").addEventListener("click",signUpFunction);


let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];

function signUpFunction(){
    let signupObj = {
        mail:document.getElementById("signinmail").value,
        password:document.getElementById("signinpassword").value
    };


  if (signupObj["mail"] == ""  || signupObj["password"] == "" ){
    alert("Fill all the input fields")
    return;
  }  

  else{
    signupArr.push(signupObj);
    document.getElementById("continueBtn").style.backgroundColor = "#1a73e8"
    window.location.href = "signinPage.html"
    document.getElementById("signinmail").value = "";
    document.getElementById("signinpassword").value = "";
  }

  localStorage.setItem("signupData", JSON.stringify(signupArr))
}