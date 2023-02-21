let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];

let signup = document.getElementById("continueBtn")

let mail = document.getElementById("signinmail");
let password = document.getElementById("signinpassword");

let eyeicon1 = document.getElementById("eyeicon1");
let eyeicon2 = document.getElementById("eyeicon2");

eyeicon1.addEventListener("click",showPasswordFunc);
eyeicon2.addEventListener("click",hidePasswordFunc);

function showPasswordFunc(){
    eyeicon1.style.display = "none";
    eyeicon2.style.display = "block"

    password.type = "text";
}

function hidePasswordFunc(){
    eyeicon1.style.display = "flex";
    eyeicon2.style.display = "none"

    password.type = "password";
}


mail.addEventListener("input",checkForText)
password.addEventListener("input",checkForText)

function checkForText(){
    if(mail.value !=="" && password.value !==""){
        signup.disabled = false
        signup.style.backgroundColor = "#1a73e8"
        signup.style.color = "#fff"
    }
    else{
      signup.disabled = true;
        signup.style.backgroundColor = "rgba(192,192,192,0.7)"
        signup.style.color = "rgba(150,150,150,1)"
    }
}





signup.addEventListener("click",signUpFunction);

function signUpFunction(){
    let signupObj = {
        mail:mail.value,
        password:password.value
    }

    let flag = false;

  if (signupObj["mail"] == ""  || signupObj["password"] == "" ){
    alert("Fill all the input fields")
    return;
  }  

  else{

    signupArr.forEach((elem) => {
      if(elem.mail == signupObj.mail){
        return flag = true;
      }
    })

    if(flag){
      alert("User Already Exist, Please Login")
    }
    else{
      signupArr.push(signupObj);
      localStorage.setItem("signupData", JSON.stringify(signupArr))
      document.getElementById("signinmail").value = "";
      document.getElementById("signinpassword").value = "";
      setTimeout(() => {
        window.location.href = "signinPage.html"
      },1200)

      flag = false;
    }

  }
}