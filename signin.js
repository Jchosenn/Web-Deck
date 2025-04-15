let siginElement = document.getElementById("sign-in");
let signupElement = document.getElementById("sign-up");
let btnElement = document.getElementById("btn");

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
