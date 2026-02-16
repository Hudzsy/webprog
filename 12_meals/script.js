const button = document.getElementById("fetch");
const tarolo = document.getElementById("tarolo");

button.addEventListener("click", betolt);

async function betolt() {
    tarolo.innerHTML = "";

    const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
    );

    const data = await res.json();

    data.categories.forEach(kat => {
        
        const kartya = document.createElement("div");
        kartya.className = "card";

        const kep = document.createElement("img");
        kep.src = kat.strCategoryThumb;
        kep.alt = kat.strCategory;

        const cim = document.createElement("div");
        cim.className = "card-title";
        cim.textContent = "Kategória: " + kat.strCategory;

        kartya.append(kep);
        kartya.append(cim);

        tarolo.append(kartya);
    });
        tarolo.appendChild(kartya);
}
