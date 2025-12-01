const messages = [];
const messageBox = document.querySelector("#messageBox");
const messageButton = document.querySelector("#messageButton");

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const uzik = await fetch("./uzik.csv")
        //console.log(uzik)
        uzikText = (await uzik.text()).split('\n').map(sor => `${sor.trim()}`);
        //console.log(uzikText);
        uzikText.forEach(uzi => {
            messages.push(uzi)
        });
    } catch (error) {
        console.error(error);
    }
});

messageButton.addEventListener("click", () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = randomMsg;
});