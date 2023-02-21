let navbarImage1 = document.getElementById("navbarImage1");
navbarImage1.addEventListener("click",HomePageFunc);

let navbarImage2 = document.getElementById("navbarImage2");
navbarImage2.addEventListener("click",HomePageFunc)

let navbarImage3 = document.getElementById("navbarImage3");
navbarImage3.addEventListener("click",HomePageFunc)

function HomePageFunc(){
    window.location = "index.html"
}


document.getElementById("navbarSignupBtn1").addEventListener("click",navbarSignupFunc);
document.getElementById("navbarSignupBtn2").addEventListener("click",navbarSignupFunc);
document.getElementById("navbarSignupBtn3").addEventListener("click",navbarSignupFunc);

function navbarSignupFunc (){
    window.location.href = "signupPage.html"
};


document.getElementById("navbarSigninBtn1").addEventListener("click",navbarSigninFunc);
document.getElementById("navbarSigninBtn2").addEventListener("click",navbarSigninFunc);
document.getElementById("navbarSigninBtn3").addEventListener("click",navbarSigninFunc);

function navbarSigninFunc(){
    window.location.href = "signinPage.html"
};


let menuIcon = document.getElementById("menuIcon")
menuIcon.addEventListener("click",openMenuFunc)

let menuItems = document.getElementById("menuItems");

function openMenuFunc(){

    menuItems.style.display = "block";
}

window.onclick = function(event) {
    if(event.target.id !== "menuItems" && event.target.id !=="menuIcon"){
        menuItems.style.display = "none";

    }

    else if(event.target.id == "menuItems"){
        menuItems.style.display = "none";

    }
}