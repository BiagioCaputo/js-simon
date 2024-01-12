console.log("JS OK");

//Recupero gli elementi dall'html

const startButton = document.getElementById("start-button");
const result = document.getElementById("future-result");
const randomlist = document.getElementById("random");



/******************* Funzioni Interne **************************/

//Funzione che crea un array di numeri random di lunghezza maxPcNumbers, senza ripetizioni
const getNumbers = (maxPcNumbers) => {
    const pcNumbers = [];

    while(pcNumbers.length < maxPcNumbers){
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        
        if(!pcNumbers.includes(randomNumber)) pcNumbers.push(randomNumber);

    }

    return pcNumbers;
}


/******************* Svolgimento effettivo **************************/

const maxPcNumbers = 5;

//metto in ascolto il pulsante inizia
startButton.addEventListener('click', () => {

    startButton.classList.add("d-none");
    result.innerText = "I numeri da memorizzare sono:";
    const listPcNumbers = getNumbers(maxPcNumbers);

    randomlist.innerText = listPcNumbers;
})