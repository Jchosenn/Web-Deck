let siginElement = document.querySelector("#sign-in");
let signupElement = document.querySelector("#sign-up");
let btnElement = document.querySelector("#btn");
let heroElement = document.querySelector(".hero");
let webElement = document.querySelector(".web-holder")
function signup(){
    siginElement.style.left = "-400px";
    signupElement.style.left = "50px";
    btnElement.style.left = "110px";
}
function signin(){
    siginElement.style.left = "50px";
    signupElement.style.left = "450px";
    btnElement.style.left = "0";
}
function toggleSignin(){
    signin();
    heroElement.classList.add("popup");
    // heroElement.style.display = "block";
    webElement.style.filter = "blur(10px)";
}
function toggleSignup(){
    signup();
    heroElement.classList.add("popup");
   // heroElement.style.display = "block";
    webElement.style.filter = "blur(10px)";
}
function closeBtn(){
    heroElement.classList.remove("popup");
    webElement.style.filter = "blur(0px)";
}
