//////////////////
//SUM OF NUMBER//
////////////////

/* Variable sumNumber untuk menyimpan angka yang akan dijumlahkan
   Variable resultSumNumber untuk menyimpan hasil dari penjumlahan
*/
let sumNumber: number = 5; // Bisa dirubah sesuai nilai angka yang akan dijumlahkan
let resultSumNumber: number = 1;

// Setiap looping akan mengevaluasi apakah nilai i kurang dari sama dengan sumNumber, Jika true akan menjalankan task dan jika false looping akan selesai, kemudian akan melakukan increment i =  i + 1

for(let i : number = 2; i <= sumNumber; i++){

    // Setiap looping akan menjalankan task yaitu Variable resultSumNumber akan ditambahkan dengan i, dan nilainya akan berubah setiap looping hingga kondisi looping menjadi false

    resultSumNumber += i;

}

// Output
console.log(resultSumNumber);