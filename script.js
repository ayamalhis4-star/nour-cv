alert("Welcome To Nour CV Website");

let logo = document.getElementById("logo");

logo.onclick = function () {
    alert("This is your personal CV website!");
}

let links = document.getElementsByTagName("a");


let cvBtn = document.getElementsByClassName("cv-button")[0];

cvBtn.onclick = function () {
    alert("Your CV is downloading...");
}

let form = document.getElementById("contactForm");

form.onsubmit = function () {
    alert("Message sent successfully!");
}

let sections = document.getElementsByClassName("section");


form.onsubmit = function () {
    alert("Message sent successfully!");
    return false;
}