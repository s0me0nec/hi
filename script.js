const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// When she clicks YES → go to the message page
yesBtn.addEventListener("click", () => {
    window.location.href = "valentine.html";
});
