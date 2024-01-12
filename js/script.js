console.log("JS OK");

//Recupero gli elementi dall'html

const startButton = document.getElementById("start-button");
const result = document.getElementById("future-result");
const randomlist = document.getElementById("random");



/******************* Funzioni Interne **************************/

//Funzione che crea un array di numeri random di lunghezza maxPcNumbers, senza ripetizioni
const getNumbers = maxPcNumbers => {
    const pcNumbers = [];

    while(pcNumbers.length < maxPcNumbers){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        
        if(!pcNumbers.includes(randomNumber)) pcNumbers.push(randomNumber);

    }

    return pcNumbers;
}

//Funzione che crea un array di numeri forniti dall'utente, senza ripetizioni
const getUserNumbers = maxUserNumbers =>{
    const userNumbers = [];
    let score = 0;

    while(userNumbers.length < maxUserNumbers){
        const userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e 100"));
        if(!userNumbers.includes(userNumber))userNumbers.push(userNumber);
    }

    return userNumbers;

}


//Funzione che confronta 2 array di numeri interi e restituisce un array di elementi in comune 

const getEqual = (array1, array2) =>{
    const equalsNumber = [];

    for(let i = 0; i <= array1.length; i++){
        if(array2.includes(array1[i]))equalsNumber.push(array1[i]);
    }

    return equalsNumber;
}

/******************* Svolgimento effettivo **************************/

const maxPcNumbers = 5;

const equalsNumber = [""];
//metto in ascolto il pulsante inizia
startButton.addEventListener('click', () => {

    startButton.classList.add("d-none");
    result.innerText = "I numeri da memorizzare sono:";

    //invoco la funzione per creare l'array di numeri random
    const listPcNumbers = getNumbers(maxPcNumbers);
    console.log(listPcNumbers);

    //pubblico l'array nell'html
    randomlist.innerText = listPcNumbers;
    
    //imposto un time-out per far sparire i numeri random e chiedere all'utente di inserire i numeri
    setTimeout(() => {
        result.innerText = "Via!"
        randomlist.innerText = "";
      }, 29500);

    setTimeout(() => {
        //invoco la funzione che chiede all'utente di inserire i numeri
        const listUserNumbers = getUserNumbers(maxPcNumbers);
        console.log(listUserNumbers);
        //invoco la funzione che confronta i 2 array restituendomi un array di elementi in comune
        const equalNumbers = getEqual(listUserNumbers, listPcNumbers); 
        console.log(equalNumbers);
        //salvo in una variabile quanti elementi ho uguali(lunghezza array di elementi in comune)
        const numberEquals = equalNumbers.length;
        //stampo i risultati in pagina
        result.innerText = `Hai totalizzato ${numberEquals} punti, indovinando ${equalNumbers}`;
        
    }, 30000);
     




})