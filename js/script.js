console.log("JS OK");

//! ESERCIZIO 1: TIRO DEI DADI - User VS. PC

//recupero le variabili

const userValue = document.getElementById("user-value");
const pcValue = document.getElementById("pc-value");

const winUser = document.getElementById("win-user");
const winPc = document.getElementById("win-pc");
const noWin = document.getElementById("no-win")
//genero il valore per l'utente e per il pc 

//! utente
const userRandomVal = Math.floor(Math.random() * 6) + 1;
   
console.log (userRandomVal);

// stampo il valore in pagina
userValue.innerText = userRandomVal;
   
//! PC
const pcRandomVal = Math.floor(Math.random() * 6) + 1;
   
console.log (pcRandomVal);

// stampo il valore in pagina
pcValue.innerText = pcRandomVal;
      


//determino il vincitore (o il pareggio) in base al risultato ottenuto

if (userRandomVal > pcRandomVal)  {
    winUser.classList.remove("d-none");
} else if (userRandomVal < pcRandomVal) {
    winPc.classList.remove("d-none");
} else {
    noWin.classList.remove("d-none");
}


//! ESERCIZIO 2: FINTA LOGIN 

//Recupero il valore dal documento

const email = document.getElementById("email-address");
const button = document.getElementById("send-email");

const notRegistered = document.getElementById("not-registered")
const success = document.getElementById("success")
let valid = "";

// creo l'array
const logEmails = ["amantedeidadi@bet.bet", "dicelover@dice.bet"];

console.log("email inserita: ", email.value, "lista email loggate", logEmails);

button.addEventListener("click", function () {
    
    for (let i = 0 ; i < logEmails.length ; i++){
        if (email.value === logEmails[i]) {
            valid = "valid!"
            console.log(logEmails[i], valid)
        }
    }
    
    if (!valid) {
        notRegistered.classList.remove("d-none")
        return
    } else {
        success.classList.remove("d-none")
    }
    email.value = "";
})