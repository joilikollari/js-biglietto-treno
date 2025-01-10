function calcolaPrezzo(km, eta) {
    // Prezzo per km
    const prezzoPerKm = 0.21;

    // Calcolare il prezzo base
    let prezzoBase = km * prezzoPerKm;

    // Applicare lo sconto in base all'età
    if (eta < 18) {
        // Sconto del 20% per i minorenni
        prezzoBase *= 0.80;
    } else if (eta > 65) {
        // Sconto del 40% per gli over 65\
        prezzoBase *= 0.60;
    }

    // Formattare il prezzo con massimo due decimali
    let prezzoFinale = prezzoBase.toFixed(2);

    // Restituire il prezzo finale
    return prezzoFinale;
}

// Raccogliere i dati dell'utente tramite prompt
let km = parseFloat(prompt("Inserisci i chilometri percorsi:"));
let eta = parseInt(prompt("Inserisci l'età del passeggero:"));

// Calcolare il prezzo totale
let prezzoTotale = calcolaPrezzo(km, eta);

// Visualizzare il risultato in forma umana
console.log(`Il prezzo del biglietto è: €${prezzoTotale}`);