// Ensure unique images per page load
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

    // Handle section expansion with smooth fade and slide effects
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let fullText = document.getElementById(targetId);
            let section = this.closest(".section");

            this.style.opacity = "0";
            setTimeout(() => this.style.display = "none", 400);

            fullText.style.display = "block";
            setTimeout(() => {
                fullText.style.opacity = "1";
                section.style.maxHeight = section.scrollHeight + "px";
            }, 50);
        });
    });

    document.querySelectorAll(".read-less").forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let fullText = document.getElementById(targetId);
            let section = this.closest(".section");

            fullText.style.opacity = "0";
            setTimeout(() => {
                fullText.style.display = "none";
                section.style.maxHeight = "initial";
            }, 400);

            let readMoreButton = document.querySelector(`.read-more[data-target='${targetId}']`);
            readMoreButton.style.display = "inline";
            setTimeout(() => readMoreButton.style.opacity = "1", 50);
        });
    });

    // Update Copyright Year Automatically
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
