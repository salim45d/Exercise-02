/////////////////
//PRIME NUMBER//
///////////////


let number : number = 7;   // Bisa dirubah dari 1 - 100
let resultPrimeNumber : string = '';  // Variable untuk menyimpan hasil

/* Declare variable dengan nama i = 1,
   Setiap looping akan mengevaluasi apakah nilai i kurang dari sama dengan nilai dari variable number(7)
   Selama true akan mengevaluasi task yang akan dijalankan dan ketika false akan keluar dari looping
   Dan setelah mengevaluasi task setiap looping akan melakukan increment yaitu 1 + 1 dan seterusnya*/

for(let i: number = 1; i <= number; i++){

    // Jika angka looping(i) sama dengan 1 maka bukan bilangan prima
    if(i === 1) {

        resultPrimeNumber = `${i} is not Prime Number`

    // Dan jika angka looping(i) habis dibagi 2 sama dengan nol atau Bil. Genap dan bukan sama dengan 2 maka bukan bilangan prima
    } else if(i % 2 === 0 && i !== 2) {

        resultPrimeNumber = `${i} is not Prime Number`
        
    // Dan jika angka looping(i) habis dibagi 3 sama dengan nol dan bukan sama dengan 3 maka bukan bilangan prima
    } else if (i % 3 === 0 && i !==3){

        resultPrimeNumber = `${i} is not Prime Number`
        
    // Dan jika angka looping(i) habis dibagi 5 sama dengan nol dan bukan sama dengan 5 maka bukan bilangan prima
    } else if (i % 5 === 0 && i !==5){

        resultPrimeNumber = `${i} is not Prime Number`
        
    // Dan jika angka looping(i) habis dibagi 7 sama dengan nol dan bukan sama dengan 7 maka bukan bilangan prima
    } else if (i % 7 === 0 && i !==7){

        resultPrimeNumber = `${i} is not Prime Number`

    // Dan jika selain angka looping(i) yang disebutkan diatas maka itu adalah bilangan prima
    } else {

        resultPrimeNumber = `${i} is Prime Number`
       
    }

    // Output number dari setiap looping
    console.log(resultPrimeNumber);
}

// Output dari variable number saja
console.log(resultPrimeNumber);