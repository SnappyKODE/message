const btn_group = document.querySelector(".btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const heart = document.querySelectorAll(".heart");

// var name = prompt("Enter your name");
// name.toUpperCase();

yesBtn.addEventListener("click", () => {
    question.innerHTML = "LOVES YOU TOO!!";
    gif.src =
    "https://media.giphy.com/media/513q7MUyNvrqzRr7I5/giphy.gif";
    btn_group.classList.add("vanish");
    heart[0].classList.remove("vanish");
    heart[1].classList.remove("vanish");
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});