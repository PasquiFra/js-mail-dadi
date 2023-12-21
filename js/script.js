console.log("JS OK");

//! ESERCIZIO 1: TIRO DEI DADI - User VS. PC

//recupero le variabili

const userValue = document.getElementById("user-value");
const pcValue = document.getElementById("pc-value");

const winUser = document.getElementById("win-user");
const winPc = document.getElementById("win-pc");
const noWin = document.getElementById("no-win")
//genero il valore per l'utente e per il pc 

let pcRandomVal;
let userRandomVal;


//? Extra-bonus
const dado = document.getElementById("dado");

//?

dado.addEventListener("click", function () {
    
    userValue.innerHTML = ""
    pcValue.innerHTML = ""
    winPc.classList.add("d-none");
    winUser.classList.add("d-none");
    noWin.classList.add("d-none");

    //! utente
    const userRandomVal = Math.floor(Math.random() * 6) + 1;
    
    console.log (userRandomVal);

    // stampo il valore in pagina
    //! userValue.innerText = userRandomVal;  <---- VALORE OTTENUTO
    if (userRandomVal === 1 ) {
        userValue.innerHTML += `<i class="fa-solid fa-dice-one"></i>`;
    } else if (userRandomVal === 2) {
        userValue.innerHTML += `<i class="fa-solid fa-dice-two"></i>`;
    } else if (userRandomVal === 3) {
        userValue.innerHTML += `<i class="fa-solid fa-dice-three"></i>`;
    } else if (userRandomVal === 4) {
        userValue.innerHTML += `<i class="fa-solid fa-dice-four"></i>`;
    } else if (userRandomVal === 5) {
        userValue.innerHTML += `<i class="fa-solid fa-dice-five"></i>`;
    } else {
        userValue.innerHTML += `<i class="fa-solid fa-dice-six"></i>`;
    }
    
    
    //! PC
    const pcRandomVal = Math.floor(Math.random() * 6) + 1;
    
    console.log (pcRandomVal);
    
    // stampo il valore in pagina
    //! pcValue.innerText = pcRandomVal;  <---- VALORE OTTENUTO
    if (pcRandomVal === 1) {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-one"></i>`;
    } else if (pcRandomVal === 2) {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-two"></i>`;
    } else if (pcRandomVal === 3) {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-three"></i>`;
    } else if (pcRandomVal === 4) {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-four"></i>`;
    } else if (pcRandomVal === 5) {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-five"></i>`;
    } else {
        pcValue.innerHTML += `<i class="fa-solid fa-dice-six"></i>`;
    }
    
    
    //determino il vincitore (o il pareggio) in base al risultato ottenuto
    
    if (userRandomVal > pcRandomVal)  {
        winUser.classList.remove("d-none");
    } else if (userRandomVal < pcRandomVal) {
        winPc.classList.remove("d-none");
    } else {
        noWin.classList.remove("d-none");
    }
})



//! ESERCIZIO 2: FINTA LOGIN 

//Recupero il valore dal documento

const email = document.getElementById("email-address");
const button = document.getElementById("send-email");

//? Extra-bonus
const dices = document.getElementById("dices");
//

const notRegistered = document.getElementById("not-registered");
const success = document.getElementById("success");
let valid = "";

// creo l'array
const logEmails = ["amantedeidadi@bet.bet", "dicelover@dice.bet"];

console.log("email inserita: ", email.value, "lista email loggate", logEmails);

button.addEventListener("click", function () {
    
    for (let i = 0 ; i < logEmails.length ; i++){
        if (email.value === logEmails[i]) {
            valid = "valid!";
            console.log(logEmails[i], valid);
        }
    }
    
    if (!valid) {
        notRegistered.classList.remove("d-none");
        email.value = "";
        return
    } else {
        success.classList.remove("d-none");
        dices.classList.remove("d-none");
    }
})