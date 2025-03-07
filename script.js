document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.getElementById(this.dataset.target);
            target.style.display = "block";
            target.style.opacity = "1";
            target.style.maxHeight = "1000px";
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

    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});
