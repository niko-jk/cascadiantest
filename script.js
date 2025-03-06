document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 222;
    let selectedImages = new Set();

    function getRandomImage() {
        let num;
        do {
            num = Math.floor(Math.random() * totalImages) + 1;
        } while (selectedImages.has(num));
        selectedImages.add(num);
        return `images/photo-${num}.jpg`;
    }

    document.getElementById("hero1").style.backgroundImage = `url('${getRandomImage()}')`;
    document.getElementById("hero2").style.backgroundImage = `url('${getRandomImage()}')`;
    document.getElementById("hero3").style.backgroundImage = `url('${getRandomImage()}')`;

    let dividers = document.querySelectorAll(".image-divider");
    dividers.forEach(div => {
        div.style.backgroundImage = `url('${getRandomImage()}')`;
    });

    // Smooth section expansion
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let fullText = document.getElementById(targetId);
            let section = this.closest(".section");

            this.style.display = "none";
            fullText.style.display = "block";
        });
    });

    document.querySelectorAll(".read-less").forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let fullText = document.getElementById(targetId);
            let section = this.closest(".section");

            fullText.style.display = "none";
            let readMoreButton = document.querySelector(`.read-more[data-target='${targetId}']`);
            readMoreButton.style.display = "inline";
        });
    });

    // Update Copyright Year Automatically
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
