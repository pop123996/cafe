function showMessage() {
    document.getElementById("message").innerHTML =
        "Tum meri life ka sabse khoobsurat hissa ho ❤️ I Love You Forever 💖";

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
