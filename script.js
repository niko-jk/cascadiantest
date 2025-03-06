document.addEventListener("DOMContentLoaded", function () {
    let totalImages = 222;
    let imageList = Array.from({ length: totalImages }, (_, i) => `photo-${i + 1}.jpg`);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setImage(elementId, imageUrl) {
        let img = new Image();
        img.src = `images/${imageUrl}`;
        img.onload = () => {
            document.getElementById(elementId).style.backgroundImage = `url('${img.src}')`;
        };
    }

    let usedImages = new Set();
    function getUniqueImages(count) {
        let availableImages = imageList.filter(img => !usedImages.has(img));
        let selected = shuffleArray(availableImages).slice(0, count);
        selected.forEach(img => usedImages.add(img));
        return selected;
    }

    // Set hero images
    getUniqueImages(3).forEach((img, index) => setImage(`hero${index + 1}`, img));

    // Set divider images
    for (let i = 1; i <= 5; i++) {
        let divImages = getUniqueImages(5);
        let divider = document.getElementById(`divider${i}`);
        divider.innerHTML = "";
        divImages.forEach(img => {
            let div = document.createElement("div");
            div.style.backgroundImage = `url('images/${img}')`;
            divider.appendChild(div);
        });
    }

    // Expand & Collapse Sections
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.display = "block";
            setTimeout(() => {
                target.style.maxHeight = "1000px";
                target.style.opacity = "1";
            }, 50);
            this.style.display = "none";
        });
    });

    document.querySelectorAll(".read-less").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.maxHeight = "0px";
            target.style.opacity = "0";
            setTimeout(() => {
                target.style.display = "none";
                document.querySelector(`[data-target='${this.dataset.target}']`).style.display = "inline";
            }, 500);
        });
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Auto-update copyright year
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
