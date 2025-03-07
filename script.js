document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.display = "block";
            target.style.opacity = "1";
            target.style.maxHeight = "1000px";
            this.style.opacity = "0";
            setTimeout(() => { this.style.display = "none"; }, 300);
        });
    });

    document.querySelectorAll(".read-less").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.opacity = "0";
            setTimeout(() => {
                target.style.maxHeight = "0px";
                target.style.display = "none";
                let readMoreButton = document.querySelector(`[data-target='${this.dataset.target}']`);
                readMoreButton.style.display = "inline";
                readMoreButton.style.opacity = "1";
            }, 500);
        });
    });

    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
