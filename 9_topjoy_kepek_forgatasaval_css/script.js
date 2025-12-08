const tarolo = document.querySelector('.tarolo')
const kupak = document.querySelector('#kupak')
const szoveg = document.querySelector('#szoveg')

const uzik = [];
let zarvaVanE = true

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("./uzik.csv");
        //console.log(response);
        const text = (await response.text()).split('\n').map(sor => `${sor.trim()}`).filter(sor => sor !== '');
        const sorok = text
        //console.log(sorok);
        sorok.forEach(sor =>{
            uzik.push(sor);
        })}
    catch (error) {
        console.error(error);
    }
});

tarolo.addEventListener('click', async () => { 
    if (zarvaVanE) {
        szoveg.textContent = '';
        tarolo.classList.remove('zar');
        tarolo.classList.add('nyit');
        setTimeout(() => {
            szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)];
        }, 500);
        zarvaVanE = false;
    } else {
        szoveg.textContent = "";
        tarolo.classList.remove('nyit');
        tarolo.classList.add('zar');
        zarvaVanE = true
    }
});