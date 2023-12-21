# Gioco dei dadi e Finta Login

Nome repo: js-mail-dadi

## ESERCIZIO 1 - Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato

## ESERCIZIO 2 - Finta Login

Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che la mail inserita sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?

**NOTE**

- è vietato utilizzare il metodo includes()
- La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
- Non è necessario usare il tag <form>, ma se lo usate, ricordate di impostare il type="button" sul <button>altrimenti il form ricaricherà la pagina.
- L'esito del controllo deve essere stampato in pagina

**Consigli del giorno**

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!

---------- **ESECUZIONE** ----------

1. Genero un numero random da 1 a 6 per l'utente e per il pc 
    - recupero le variabili
    - genero il valore per l'utente e per il pc
    - stampo i valori in pagina
    - determino il vincitore (o il pareggio) in base al risultato ottenuto 

2. prendo la mail dal form e la valido assicurandomi sia inclusa nella mia array
    - recupero le variabili
    - creo l'array inserendo i suoi valori
    - creo la formula di validazione
    - restituisco il risultato in pagina