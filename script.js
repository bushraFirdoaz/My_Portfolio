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

/* =========================
   TYPEWRITER TEXT ANIMATION
========================= */

const nameText = "I'm Bushra";
const subtitleText =
  "Where creativity meets code — crafting beautiful front-end experiences.";

const nameElement = document.getElementById("typed-name");
const subtitleElement = document.getElementById("typed-subtitle");

let nameIndex = 0;
let subtitleIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        nameElement.textContent += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 120);
    } else {
        setTimeout(typeSubtitle, 500);
    }
}

function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 40);
    }
}

window.addEventListener("load", typeName);


