console.log('JS OK')

/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


- 0 Recupero l'elemento da DOM
- 1 Creo un ciclo "for" per avere tutti i numeri da 0 a 100.
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0 Recupero l'ememento dal DOM

// # 1 Creo il ciclo "for"
for (let i = 1; i <= 100; i++) {

    let name = i;

  if (i % 3 === 0 && i % 5 === 0) {
    name = 'FizzBuzz';   
   
} else if (i % 3 === 0) { 
    name = 'Fizz';  

} else if (i % 5 === 0) { 
    name = 'Buzz';
}

 console.log (name);  
}