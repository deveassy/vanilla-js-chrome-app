const images = ["0.jpeg", "1.jpeg", "2.png", "3.gif", "4.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage); // html body의 마지막에 element를 생성시켜줌
