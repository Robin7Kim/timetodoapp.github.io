const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

function getClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    date.innerText = now.toLocaleDateString('en-US', dateOptions);
    clock.innerText = now.toLocaleTimeString('en-US', timeOptions);
}

setInterval(getClock, 1000);