let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let floatArea = document.getElementById("floatArea");
let petalsArea = document.getElementById("petals");

/* Words that float up */
const loveWords = ["I love you", "mwah", "baby", "cutie", "my love", "pretty girl", "angel"];

/* Sparkling floating words */
function makeWord() {
    let word = document.createElement("div");
    word.classList.add("floatWord");
    word.innerHTML = loveWords[Math.floor(Math.random() * loveWords.length)];

    word.style.left = Math.random() * 85 + "vw";
    word.style.fontSize = (Math.random() * 15 + 18) + "px";

    floatArea.appendChild(word);

    setTimeout(() => word.remove(), 6000);
}

setInterval(makeWord, 900);

/* Falling flower petals */
function makePetal() {
    let petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 4 + 3) + "s";

    petalsArea.appendChild(petal);

    setTimeout(() => petal.remove(), 7000);
}

setInterval(makePetal, 350);

/* Moving NO button */
noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 80 + "vw";
    let y = Math.random() * 80 + "vh";
    noBtn.style.left = x;
    noBtn.style.top = y;
});

/* YES button -> next page */
yesBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});
