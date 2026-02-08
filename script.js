let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 80 + "vw";
    let y = Math.random() * 80 + "vh";
    noBtn.style.position = "absolute";
    noBtn.style.left = x;
    noBtn.style.top = y;
});

yesBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});
