console.log("JS OK");

/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # Recupero l'ememento dal DOM
const listElements = document.getElementById("numbers-list");

/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # CICLO FOR PER GENERARE I NUMERI DA 1 a 100
for (let i = 1; i <= 100; i++) {
  // in questo caso i miei "square" conterranno all'interno un numero corrispondente alla "i" del contatore.
  let square = i;
  // intercetto gli "square" il cui numero è divisibile per 3 e 5.
  if (i % 3 === 0 && i % 5 === 0) {
    square = "FizzBuzz";
    // intercetto gli "square" il cui numero è divisibile per 3.
  } else if (i % 3 === 0) {
    square = "Fizz";
    // intercetto gli "square" il cui numero è divisibile per 5.
  } else if (i % 5 === 0) {
    square = "Buzz";
  }

  console.log(square);
  // stampo in console per mia verifica

  // mi creo una variabile di comodo che determinerà l'aspetto dei miei "square" in pagina, grazie a classi CSS già predisposte.
  const myClass = `${square}`.toLowerCase(); //l'istruzione .toLowerCase(); mi occorre per "abbassare" tutti i caratteri in modo da far corrispondere perfettamente le classi settate nel CSS che in questo caso per praticità hanno lo stesso nome della stringa da stampare in pagina.

  listElements.innerHTML += `<li class=${myClass}>${square}</li>`;
}
