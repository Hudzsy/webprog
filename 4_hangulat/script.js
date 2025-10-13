const moodSlider = document.querySelector("#moodSlider");
const img = document.querySelector("#moodImage");

window.addEventListener("DOMContentLoaded", () => {
    img.src = `./img/${moodSlider.value}.png`;
});
// console.log(moodSlider);

moodSlider.addEventListener("input", () => {
    const sliderValue = parseInt(moodSlider.value)+1;
    // console.log(sliderValue);
    img.src = `./img/${sliderValue}.png`;
    
})