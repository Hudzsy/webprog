{/* 

    <div class="card">
        <img src="./img/dog-1.jpg" alt="dog1">
        <div class="content">
            <h3>Kártya #1</h3>
            <p>dog-1.jpg</p>
        </div>
    </div> 

*/}

const cards = document.querySelector('#cards');

// console.log(cards)

const LISTA_URL = 'src/kepek.txt';
const IMG_MAPPA = 'img/';

window.addEventListener('DOMContentLoaded', loadCards)

async function loadCards() {
    try {
        const res = await fetch(LISTA_URL)
        // console.log(res);
        if (!res.ok) {
            return alert('Nem sikerült betölteni a fájlt');
        }
        const text = await res.text();
        // console.log(text);

        const files = text.split('\n').map(line => line.trim()).filter(sor => sor.length > 0);
        // console.log(text);
        if (files.length === 0) {
            return alert('A lista üres!')
        }

        cards.innerHTML = '';

        files.forEach((fileName, index) => {
           cards.appendChild(createCard(fileName, index)) 
        });

    } catch (error) {
        alert(`Hiba: ${error}`)
    }
}

function createCard(fileName, index){
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src=`${IMG_MAPPA}${fileName}`
    img.alt=`dog${index+1}`
    
    const contents = document.createElement('div')
    contents.className = 'content'

    const h3 = document.createElement('h3')
    h3.textContent = `Kutya #${index+1}`

    const p = document.createElement('p')
    p.textContent = `${fileName}`

    contents.append(h3)
    card.append(img)
    contents.append(p)
    card.append(contents)
    return card
    
}