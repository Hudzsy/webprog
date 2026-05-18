const API_URL = 'https://nodejs118.dszcbaross.edu.hu/api/auth'

// változók a regisztrációhoz
const regName = document.querySelector('#regName')
const regEmail = document.querySelector('#regEmail')
const regPsw = document.querySelector('#regPsw')
const regBtn = document.querySelector('#regBtn')

// változók a loginhoz
const loginEmail = document.querySelector('#loginEmail')
const loginPsw = document.querySelector('#loginPsw')
const loginBtn = document.querySelector('#loginBtn')
const testLoginBtn = document.querySelector('#testLoginBtn')
const logoutBtn = document.querySelector('#logoutBtn')
const loginMessage = document.querySelector('#loginMessage')

// ---- események ----
//regisztráció esemény
regBtn.addEventListener("click", register)

//login eseménye
loginBtn.addEventListener("click", login)

//testlogin eseménye
testLoginBtn.addEventListener("click", testlogin)

//logout eseménye
logoutBtn.addEventListener("click", logout)

// a regisztráció függvénye

async function register() {
    const name = regName.value
    const email = regEmail.value
    const psw = regPsw.value

    //console.log(name, email, psw)
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.striny({name, email, psw})
        })

        const data = await response.json()

        console.log(data);

        if (!response.ok) {
            alert('hiba')
        }

        const registerMessage = document.querySelector('#registerMessage')
        registerMessage.textContent = data.message

    } catch (error) {
        console.log(error);
    }
}

//login
async function login() {
    const email = loginEmail.value
    const psw = loginPsw.value

    //console.log(email, psw)
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({email, psw})
        })

        const data = await response.json()

        console.log(data);

        if (!response.ok) {
            alert('hiba')
        }

        const log = document.querySelector('#loginMessage')
        loginMessage.textContent = data.message

    } catch (error) {
        console.log(error);
    }
}

//testlogin
async function testlogin() {
    
}

//logout
async function logout() {
    
}