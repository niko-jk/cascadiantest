document.addEventListener("DOMContentLoaded", function () {
    let imageList = [
        "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
        "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg"
    ];

    function getRandomImages(count) {
        let shuffled = [...imageList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Set hero images
    let heroImages = getRandomImages(3);
    document.getElementById("hero1").style.backgroundImage = `url('images/${heroImages[0]}')`;
    document.getElementById("hero2").style.backgroundImage = `url('images/${heroImages[1]}')`;
    document.getElementById("hero3").style.backgroundImage = `url('images/${heroImages[2]}')`;

    // Set divider images
    for (let i = 1; i <= 4; i++) {
        let divImages = getRandomImages(5);
        let divider = document.getElementById(`divider${i}`);
        divider.innerHTML = divImages.map(img => `<div style="background-image: url('images/${img}');"></div>`).join("");
    }

    // Smooth scrolling effect
    document.querySelectorAll(".nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        });
    });
});
