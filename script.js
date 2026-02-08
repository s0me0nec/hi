const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const message = document.getElementById("message");
const customMessage = document.getElementById("customMessage");
const songLink = document.getElementById("songLink");

// CHANGE THIS TO THE SONG THAT REMINDS YOU OF HER
const songURL = "https://youtu.be/dQw4w9WgXcQ"; // replace this!

// CHANGE THIS TO YOUR MESSAGE FOR HER
const yourMessage = "This is where you can write your message for her. 💗";

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Yay!!! You're my Valentine 💗💗";

    // Reveal your personal message
    customMessage.style.display = "block";
    customMessage.textContent = yourMessage;

    // Reveal the song link
    songLink.style.display = "inline-block";
    songLink.href = songURL;
    songLink.textContent = "💗 A song that reminds me of you 💗";
});
