const backImage = document.querySelector("main");

const images = [ 
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
];

// main
const chosenImage = images[parseInt(Math.random()*images.length)];

backImage.style.backgroundImage = `url(img/${chosenImage})`;
