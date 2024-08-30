/////////////////////
//FACTORIAL NUMBER//
///////////////////

/* Variable factorialNumber untuk menyimpan angka faktorial
   Variable resultFactorial untuk menyimpan hasil faktorial
*/
let factorialNumber: number = 4; // Bisa dirubah sesuai nilai angka yang akan difaktorialkan
let resultFactorial: number = 1;

// Setiap looping akan mengevaluasi apakah nilai i lebih besar dari 1, Jika true akan menjalankan task dan jika false looping akan selesai kemudian akan melakukan decrement i =  i - 1

for(let i : number = factorialNumber; i >= 1; i--){

    // Setiap looping akan menjalankan task yaitu Variable resultFactorial akan dikalikan dengan i(6), dan nilainya akan berubah setiap looping hingga kondisi looping menjadi false

    resultFactorial *= i

}

//Output 
console.log(resultFactorial);