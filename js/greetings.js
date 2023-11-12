// 요소 선택
const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");

const greeting = document.querySelector(".greeting");
const greetingWrap = document.querySelector(".greeting_wrap");

const logoutBtn = document.querySelector(".logout");
const logoutOpacity = document.querySelector(".greeting_wrap .opacity0");

// 상수 선언
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 함수 선언
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Heloo, my friend!. ${username}.`;
    greetingWrap.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function hoverGreeting() {
    logoutOpacity.classList.remove("opacity0"); 
}

function leaveGreeting() {
    logoutOpacity.classList.add("opacity0"); 
}

function clickLogout() {
    localStorage.removeItem(USERNAME_KEY);
    greetingWrap.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
}

// main
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}

greetingWrap.addEventListener("mouseover", hoverGreeting);
greetingWrap.addEventListener("mouseout", leaveGreeting);
logoutBtn.addEventListener("click", clickLogout);
