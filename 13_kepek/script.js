const selectSzerzok = document.getElementById('szerzok');
const tarolo = document.getElementById('tarolo');

let kepAdatok = [];

async function getKepek() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?limit=50');
        kepAdatok = await response.json();

        setupSzerzoLista();
        renderel(kepAdatok);
    } catch (hiba) {
        console.error("Hiba történt:", hiba);
        tarolo.innerHTML = "<p>Hiba a képek betöltésekor!</p>";
    }
}

function setupSzerzoLista() {

    const egyediSzerzok = kepAdatok.map(k => k.author);
    const unique = new Set(egyediSzerzok)

    selectSzerzok.innerHTML = '<option value="all">Minden szerző</option>';

    unique.forEach(nev => {
        const opcio = document.createElement('option');
        opcio.value = nev;
        opcio.textContent = nev;
        selectSzerzok.appendChild(opcio);
    });
}

function renderel(lista) {
    tarolo.innerHTML = "";

    lista.forEach(elem => {
        const cardHTML = `
            <div class="card">
                <div class="card-inner">
                    <img src="${elem.download_url}" alt="${elem.author}" class="img" loading="lazy">
                </div>
                <div class="author">📷 ${elem.author}</div>
            </div>
        `;
        tarolo.insertAdjacentHTML('beforeend', cardHTML);
    });
}

selectSzerzok.addEventListener('change', (e) => {
    const valasztott = e.target.value;

    if (valasztott === "all") {
        renderel(kepAdatok);
    } else {
        const szurt = kepAdatok.filter(k => k.author === valasztott);
        renderel(szurt);
    }
});

getKepek();
