let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let heartsContainer = document.getElementById("hearts");

/* Make NO button run */
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 80 + "vw";
    let y = Math.random() * 80 + "vh";
    noBtn.style.position = "absolute";
    noBtn.style.left = x;
    noBtn.style.top = y;
});

/* Go to second page after YES */
yesBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});

/* falling hearts generator */
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
