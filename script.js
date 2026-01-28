const images = document.querySelectorAll(".gallery-grid img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
