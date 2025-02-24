# Biglietto Treno

## Calcolo del prezzo del biglietto

### Descrizione:

Questo programma calcola il prezzo di un biglietto ferroviario in base ai chilometri da percorrere e all'età del passeggero.
Vengono applicati sconti in base all'età:

- **Sconto del 20%** per i minorenni (meno di 18 anni)

- **Sconto del 40%** per gli over 65 (65 anni o più)

Il prezzo base del biglietto è di **0.21€ per km.**

---

### Passaggi per la preparazione del codice

1. **Chiedere all'utente** il numero di km da percorrere e la sua età tramite *prompt*.

2. **Calcolare il prezzo base** moltiplicando i km per il prezzo unitario.

3. **Applicare eventuali sconti:**

   - Se l'età è inferiore a 18 anni:
     - Applicare uno sconto del 20%.

   - Se l'età è superiore e/o uguale a 65 anni: 
     - Applicare uno sconto del 40%.

4. **Formattare il prezzo finale** per avere due decimali.

5. **Mostrare il risultato** sia nella console che in un *alert*.

### Esecuzione del codice 

- Aprire un browser con la console JavaScript.

- Aggiungere lo script "app.js" nel file index.html.

- Inserire i dati richiesti nei *prompt*.

- Visualizzare che il risultato sia nella console e in un popup di *alert*.
