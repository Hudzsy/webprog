const characters = document.querySelector('#characters');
const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json';

window.addEventListener('DOMContentLoaded', fetchCharacters);

async function fetchCharacters() {
    try {
        const res = await fetch(HP_URL);
        if (!res.ok) {
            return alert('Nem sikerült betölteni a fájlt');
        }
        const data = await res.json();

        const chars = Array.isArray(data) ? data : data.potter; 

        if (!chars) {
            throw new Error("Az adatszerkezet nem megfelelő!");
        }

        displayCharacters(chars);

    } catch (error) {
        alert(`Hiba: ${error}`);
    }
}

function displayCharacters(chars) {
    characters.innerHTML = '';
    chars.forEach(char => {
        characters.appendChild(createCard(char));
     });
}

function fixImageUrl(url) {
	if(!url) {
		return alert('A tömböt elfelejtetted elküldeni')
	}
	
	return url
	.replace('http://hp-api.herokuapp.com/', 'https://hp-api.onrender.com/' )
	.replace('http://', 'https://')
}


function createCard(char){
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = fixImageUrl(char.image)
    img.alt = char.name;
    
    const contents = document.createElement('div');
    contents.className = 'content';

    const h3 = document.createElement('h3');
    h3.textContent = char.name;
    const p = document.createElement('p');
    p.innerHTML = `
        Ház: ${char.house || 'Ismeretlen'}<br>
        Születési év: ${char.yearOfBirth || 'Ismeretlen'}<br>
        Színész: ${char.actor || 'Ismeretlen'}
    `;

    contents.append(h3);
    contents.append(p);
    card.append(img);
    card.append(contents);
    return card;
}


