const startBtn = document.getElementById("start");
const bgm = document.getElementById("bgm");

startBtn.addEventListener("click", () => {

    bgm.volume = 0.3;

    bgm.play();

    const card = document.querySelector(".card");

    card.classList.add("open");

    setTimeout(() => {

        window.location.href="day1.html";

    },900);

});
