// Chiediamo all'utente il numero di chilometri e l'età
const km = prompt("Inserisci il numero di km da percorrere:");
const age = prompt("Inserisci la tua età:");

// Definiamo il prezzo al km
const prezzoKm = 0.21;
let prezzoTotale = km * prezzoKm;

// Applichiamo gli sconti
if (age < 18) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100; // Sconto del 20%
} else if (age >= 65) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100; // Sconto del 40%
}

// Formattiamo il prezzo finale in forma umana con due decimali al massimo (centsimi)
console.log (prezzoTotale = prezzoTotale.toFixed(2));
