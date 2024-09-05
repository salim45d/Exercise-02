/////////////////////
//FACTORIAL NUMBER//
///////////////////

/* Variable factorialNumber untuk menyimpan angka faktorial
   Variable resultFactorial untuk menyimpan hasil faktorial
*/
let factorialNumber: number = 6; // Bisa dirubah sesuai nilai angka yang akan difaktorialkan
let factorialMassage: string = `${factorialNumber}! -> ${factorialNumber} X`;
let resultFactorial: number = factorialNumber;

// Setiap looping akan mengevaluasi apakah nilai i lebih besar sama dengan dari 1, Jika true akan menjalankan task dan jika false looping akan selesai kemudian akan melakukan decrement i =  i - 1

for (let i: number = factorialNumber - 1; i >= 1; i--) {
  // Setiap looping akan menjalankan task yaitu Variable resultFactorial akan dikalikan dengan i, dan nilainya akan berubah setiap looping hingga kondisi looping menjadi false

  resultFactorial *= i;
  factorialMassage += i === 1 ? `${i} = ${resultFactorial}` : ` ${i} x `;
}

//Output
console.log(resultFactorial);
console.log(factorialMassage);
