const characters = document.querySelector('#characters')
console.log(characters);

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json';

window.addEventListener('DOMContentLoaded', fetchCharacters)

async function fetchCharacters() {
    try {
        const res = await fetch(HP_URL)
        // console.log(res);
        if (!res.ok) {
            return alert('Nem sikerült betölteni a fájlt');
        }
        const chars = await res.json();
        // console.log(chars);

        displayCharacters(chars)

        files.forEach((fileName, index) => {
           characters.appendChild(createCard(fileName, index)) 
        });

    } catch (error) {
        alert(`Hiba: ${error}`)
    }
}

function displayCharacters(chars) {
    // console.log(chars);

    chars.forEach(char => {
        characters.appendChild(createCard(fileName, index)) 
     });
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


