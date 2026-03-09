# Esercizi

Dovete trasformare questo JS in componenti REACT

## Step

1. Aprire il browser e digitare `code.new` nella barra degli indirizzi, per creare un nuovo progetto React;
2. Copiare e incollare il codice CSS in App.css;
3. Trasformare il markup HTML e il JS in componenti React;
4. Importare i componenti in App.js e renderizzarli;

👀 Mantieni gli id e le classi identiche a quelle dell'HTML!

## ⚠️ Bonus

Se il pulsante della modale invece che all'interno del componente Modal, lo spostiamo all'esterno, come possiamo gestire l'apertura e la chiusura della modale? Prova a risolvere questo problema usando lo stato e le props!

Per l'accordion, usa questo array:

```
const accordionItems = [
  {
    id: 1,
    title: "Cos'è React?",
    content: "React è una libreria JavaScript sviluppata da Meta per costruire interfacce utente tramite componenti riutilizzabili."
  },
  {
    id: 2,
    title: "Cosa sono i componenti?",
    content: "I componenti sono blocchi indipendenti e riutilizzabili che descrivono una parte dell'interfaccia. Possono essere funzioni o classi."
  },
  {
    id: 3,
    title: "Cosa sono props e state?",
    content: "Le props sono dati passati dall'esterno a un componente (read-only). Lo state è invece uno stato interno al componente che può cambiare nel tempo."
  },
  {
    id: 4,
    title: "Cos'è useState?",
    content: "useState è un hook di React che permette di aggiungere uno stato locale a un componente funzionale. Restituisce il valore corrente e una funzione per aggiornarlo."
  },
  {
    id: 5,
    title: "Cos'è JSX?",
    content: "JSX è una sintassi che permette di scrivere HTML all'interno di JavaScript. Viene trasformato in chiamate a React.createElement() durante la compilazione."
  }
];
```

Per le tabs, usa questo array:

```
const tabItems = [
  {
    id: 1,
    label: "Componenti",
    content: "I componenti React sono funzioni che restituiscono JSX. Possono essere riutilizzati in tutta l'applicazione passando dati tramite props."
  },
  {
    id: 2,
    label: "Hooks",
    content: "Gli hooks come useState e useEffect permettono di usare stato ed effetti collaterali all'interno dei componenti funzionali."
  },
  {
    id: 3,
    label: "Props",
    content: "Le props sono il meccanismo con cui un componente padre passa dati ai componenti figli. Sono in sola lettura e non possono essere modificate dal figlio."
  }
];
```
