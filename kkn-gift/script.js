const startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {

    const card = document.querySelector(".card");

    card.classList.add("open");

    setTimeout(() => {

        window.location.href = "day1.html";

    }, 900);

});