//Programm Sortieren:

let zahlen, tausch, x, länge;

ausgabe(sortieren(eingabe(zahlen)));

function eingabe (zahlen) {
    länge = parseInt(prompt("Bitte die Anzahl der Zahlen eingeben:"))
    zahlen = new Array (länge);
    for (let i = 0; i < länge; i++) {
        x=1+i;
        zahlen[i] = parseInt(prompt("Bitte die "+ x +". Zahl eingeben:"))
    }
    ausgabe (zahlen);
    return (zahlen);
    
}

function sortieren(zahlen) {
    for (let i = 0; i < zahlen.length; i++) {
        
        for (let j = 0; j < zahlen.length; j++) {
            
            if (zahlen[j] > zahlen[1+j] )
            {tausch = zahlen[j];
            zahlen[j] = zahlen[1+j];
            zahlen[1+j] = tausch;}
        }
    }
    return zahlen;
}
    
function ausgabe(outputStr) {
    console.log(outputStr);
}