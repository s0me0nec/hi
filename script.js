let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let heartsContainer = document.getElementById("hearts");

/* escape no button */
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 80 + "vw";
    let y = Math.random() * 80 + "vh";
    noBtn.style.position = "absolute";
    noBtn.style.left = x;
    noBtn.style.top = y;
});

/* go to second page */
yesBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});

/* floating cute particles */
const symbols = ["💗", "✨", "🌸", "💞", "⭐", "💘", "🩷"];

function makeFloating() {
    let item = document.createElement("div");
    item.classList.add("float");
    item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 95 + "vw";
    item.style.fontSize = (Math.random() * 20 + 15) + "px";
    item.style.animationDuration = (Math.random() * 4 + 3) + "s";

    heartsContainer.appendChild(item);

    setTimeout(() => item.remove(), 6000);
}

setInterval(makeFloating, 250);
