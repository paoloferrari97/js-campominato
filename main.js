function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


do {
    var livello = parseInt(prompt("Inserisci la difficoltà del gioco! [0/1/2]"))
} while (isNaN(livello) || livello < 0 || livello > 2)

var limit;

if (livello == 0) {
    limit = 100;
} else if (livello == 1) {
    limit = 80;
} else if (livello == 2) {
    limit = 50;
}

var bombe = [];

while (bombe.length < 16) {
    var numero = randomNumber(1, limit);
    if (!bombe.includes(numero)) {
        bombe.push(numero);
    }
}

console.log(bombe);

var arrayUtente = [];
while (arrayUtente.length < (limit - 16)) {
    var numeroUtente = Number(prompt("Inserisci un numero tra 1 e " + limit));
    if (isNaN(numeroUtente) || numeroUtente > limit || numeroUtente < 1) {
        alert("Inserisci un numero tra 1 e " + limit);
    } else {
        if (bombe.includes(numeroUtente)) {
            alert("Hai beccato una bomba! Punti totali: " + arrayUtente.length);
            break; //termina un ciclo (qui il while), c'è anche continue (salta alla prossima iterazione del ciclo)
        } else if (!arrayUtente.includes(numeroUtente)) {
            arrayUtente.push(numeroUtente);
        } else {
            alert("Non puoi inserire più volte lo stesso numero!");
        }
        console.log(arrayUtente);
    }
    
}

if (arrayUtente.length == (limit - 16)) {
    alert("Hai vinto! Punti totali: " + arrayUtente.length);
}