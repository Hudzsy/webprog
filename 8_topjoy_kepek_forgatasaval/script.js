const kupak = document.querySelector("#kupak");
const szoveg = document.querySelector("#szoveg");
const tarolo = document.querySelector(".tarolo");
//console.log(kupak, szoveg, tarolo);

const uzik = [];
let zarvaVanE = true;

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("./uzik.csv");
        //console.log(response);
        const text = (await response.text()).split('\n').map(sor => `${sor.trim()}`);
        const sorok = text
        //console.log(sorok);
        sorok.forEach(sor =>{
            uzik.push(sor);
        })}
    catch (error) {
        console.error(error);
    }
});

const animateCap = async (start, end) => {
    const step = start < end ? 1 : -1
    for (let i = start; i !== end + step; i+=step) {
        await new Promise(resolve => setTimeout(resolve, 13));
        kupak.src = `./images/bottlecap_${i}.png`;
    }
}

tarolo.addEventListener('click', async () => { 
    if (zarvaVanE) {
        await animateCap(0, 10);
        szoveg.textContent = uzik[Math.floor(Math.random() * uzik.length)]
        zarvaVanE = false
    } else {
        await animateCap(10, 0);
        szoveg.textContent = "";
        zarvaVanE = true
    }
});