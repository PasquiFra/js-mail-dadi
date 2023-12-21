console.log("JS OK");

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
    noWin.classList.remove("d-none")
}