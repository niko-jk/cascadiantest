document.addEventListener("DOMContentLoaded", function () {
    let totalImages = 222;
    let imageList = [];

    // Generate image filenames
    for (let i = 1; i <= totalImages; i++) {
        imageList.push(`photo-${i}.jpg`);
    }

    function getRandomImages(count) {
        let shuffled = [...imageList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function setImage(elementId, imageUrl) {
        let img = new Image();
        img.src = `images/${imageUrl}`;
        img.onload = function () {
            document.getElementById(elementId).style.backgroundImage = `url('${img.src}')`;
        };
        img.onerror = function () {
            console.error(`Error loading image: ${img.src}`);
        };
    }

    // Set hero images
    let heroImages = getRandomImages(3);
    setImage("hero1", heroImages[0]);
    setImage("hero2", heroImages[1]);
    setImage("hero3", heroImages[2]);

    // Set divider images
    for (let i = 1; i <= 5; i++) {
        let divImages = getRandomImages(5);
        let divider = document.getElementById(`divider${i}`);
        divider.innerHTML = divImages.map(img => `<div style="background-image: url('images/${img}');"></div>`).join("");
    }

    // Expand & Collapse Sections
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.display = "block";
            target.style.maxHeight = "1000px";
            target.style.transition = "max-height 0.5s ease-in-out";
            this.style.display = "none";
        });
    });

    document.querySelectorAll(".read-less").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.maxHeight = "0px";
            setTimeout(() => { target.style.display = "none"; }, 500);
            document.querySelector(`[data-target='${this.dataset.target}']`).style.display = "inline";
        });
    });

    // Smooth scrolling for menu
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        });
    });
});
