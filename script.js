const img = [
    "autumn-219972_1280.jpg",
    "california-1751455_1280.webp",
    "fantasy-3077928_1280.webp",
    "feather-3010848_1280.webp",
    "pexels-photo-853199.jpeg",
    "pexels-photo-1402787.jpeg"
];
const cover = document.querySelector(".cover");
let count = img.length;
let card = document.createElement("div");
// перемешать массив
function shuffle(array) {
    array.sort(() => (Math.random() - 0.5))
}
// перемешать rotate translate
function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function init() {
    shuffle(img);
    for (let i = 0; i < count; i++) {
        card = document.createElement("div");
        card.classList.add("card");
        card.style.background = `url("./images/${img[i]}")`
        card.style.backgroundSize = "cover";
        card.style.transform = `rotate(${randInt(-15, 15)}deg) 
        translate(${randInt(-40, 40)}px,${randInt(-40, 40)}px)`;
        cover.append(card);
    }
}
init();

cover.addEventListener("click", event => {
    if (event.target.classList.contains("card")) {
        event.target.classList.add("go");
        count--;
        console.log(count);
    }
    if (count === 0) {
        let card = document.querySelectorAll(".card");

        for (let i = 0; i < card.length; i++) {
            cover.removeChild(card[i])
        }
        count = img.length;
        init();
        console.log(count);
    }
});