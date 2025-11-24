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
