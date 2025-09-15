const cities = document.querySelector('#cities');
// const cities = document.getElementById('cities');

cities.addEventListener('change', () => {
    const selected = cities.value;
    // console.log(selected)    4

    const demo = document.querySelector('#demo');
    demo.textContent = selected;
    
    const image = document.querySelector('#image');
    const img = document.createElement('img');
    img.src = `./img/${selected}.jpg`;
    img.alt = selected;
    img.title = selected
    console.log(img)

    image.replaceChildren(img)
});