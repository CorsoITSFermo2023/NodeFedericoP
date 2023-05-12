var a =2; //vecchio modo di assegnare le variabili, js è blockscoped, 
//dentro ogni parentesi graffa è un contesto(i contesti vedono solo dentro gli altri contesti)
let b=1; //puo cambiare valore ed essere riassegnata
const c = 3;  //costante, ma puo essere modificata, solo se sono scalari: boolean, intero, stringa, oggetto, funzione,..

console.log('stampa', a ,b,c );


/*const d = {
    a:3
};*/

//in js l'array è un oggetto, le cui proprietà sono gli indici dell'array
//dentro gli apici quadri posso mettere il nome di una proprietà
//js è uno spaghetti code
totale=0;
for(let i=0; i<prodotti.lenght; i++){
    const prodotto =prodotti[i];
    totale += prodotto.prezzo*prodotto.qty;
}

for(let i of prodotti){
    totale += prodotto.prezzo*prodotto.qty;
}

for(let index in prodotti){
    const prodotto = prodotti[index];
    totale += prodotto.prezzo*prodotto.qty;
}

    while(i<prodotti.lenght){

    }
    do{

    }while(false);

    //forEach metodo per reiterare
    //js funziona con le callback