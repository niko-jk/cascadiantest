document.addEventListener("DOMContentLoaded", function () {
    let totalImages = 222; // Total number of images available
    let imageList = [];

    // Generate filenames from "photo-1.jpg" to "photo-222.jpg"
    for (let i = 1; i <= totalImages; i++) {
        imageList.push(`photo-${i}.jpg`);
    }

    function getRandomImages(count) {
        let shuffled = [...imageList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function setImage(elementId, imageUrl) {
        let img = new Image();
        img.src = imageUrl;
        img.onload = function () {
            document.getElementById(elementId).style.backgroundImage = `url('${imageUrl}')`;
        };
        img.onerror = function () {
            console.error(`Error loading image: ${imageUrl}`);
        };
    }

    // Set hero images
    let heroImages = getRandomImages(3);
    setImage("hero1", `images/${heroImages[0]}`);
    setImage("hero2", `images/${heroImages[1]}`);
    setImage("hero3", `images/${heroImages[2]}`);

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
