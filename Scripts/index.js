document.querySelector("#findCourse").addEventListener("click",btnFunc)

function btnFunc (){
    window.location.href = "coursePage.html"
};


let question1 = document.getElementById("question1")
let question2 = document.getElementById("question2")

let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")

let ques1 = document.getElementById("ques1")
let ques2 = document.getElementById("ques2")

question1.addEventListener("click",openQuestion1);
question2.addEventListener("click",openQuestion2);

let flag1 = false;
let flag2 = false;

function openQuestion1(){
    if(!flag1){
        ques1.style.display = "block";
        flag1=true;
        icon1.style.transform = "rotate(180deg)";
        icon1.style.transition = "all 0.4s ease-in-out";
        flag2=false;
    }
    else{
        ques1.style.display = "none";
        flag1=false;
        icon1.style.transform = "rotate(0deg)";
    }

    ques2.style.display = "none";
    icon2.style.transform = "rotate(0deg)";
   
}

function openQuestion2(){
    if(!flag2){
        ques2.style.display = "block";
        flag2=true;
        icon2.style.transform = "rotate(180deg)";
        icon2.style.transition = "all 0.4s ease-in-out";
        flag1=false;
    }
    else{
        ques2.style.display = "none";
        flag2=false;
        icon2.style.transform = "rotate(0deg)";
    }

    ques1.style.display = "none";
    icon1.style.transform = "rotate(0deg)";
}    


