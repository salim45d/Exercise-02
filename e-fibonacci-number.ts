/////////////////////
//FIBONACCI NUMBER//
///////////////////

/* Declare Variable untuk menyimpan Nilai dari Angka Fibonacci ke 0, 1 dan Fibonacci selanjutnya
   Declare Variable untuk menyimpan Angka Fibonacci ke N yang ingin dicari
   Declare Variable untuk menyimpan hasil dari penghitungan Fibonacci
*/
let angkaFibonacciKeNol : number = 0, angkaFibonacciKeSatu = 1, angkaFibonacciKeDuaDST;
let angkaFibonacciKeN : number = 15;  // Bisa dirubah sesuai nilai N yang dingin dicari
let hasilFibonacci : string = '';

/* Setiap looping akan mengevaluasi nilai i apakah kurang dari sama dengan Variable angkaFibonacciKeN (15),
   Jika true akan menjalankan task dan ketika false akan keluar dari looping, setiap task selesai dijalankan akan melakukan increment.
*/
for (let i : number = 0; i <= angkaFibonacciKeN; i++) {

    // Jika nilai i kurang dari sama dengan 1 maka akan dijalankan task, yaitu:
    if (i <= 1) {

        //Jika nilai i sama dengan 0 maka sama dengan dengan variable angkaFibonacciKeNol
        if(i === 0) {

            hasilFibonacci = `Angka Fibonacci ke ${i} adalah ${angkaFibonacciKeNol}`;
            
        // Dan Jika nilai i sama dengan 1 maka sama dengan dengan variable angkaFibonacciKeSatu
        } else {

            hasilFibonacci = `Angka Fibonacci ke ${i} adalah ${angkaFibonacciKeSatu}`;

        }

    // Dan selain kondisi diatas, maka akan dijalankan task, yaitu:
    } else {

        // Angka Fibonacci ke dua dan seterusnya adalah penjumlahan dari Angka Fibonacci ke-0 dan Ke-1 (dst). Nilai ini akan berubah setiap kali looping.
        angkaFibonacciKeDuaDST = angkaFibonacciKeNol + angkaFibonacciKeSatu;  

        // Setiap kali looping Angka Fibonacci ke-0 nilainya akan diganti dengan nilai dari Angka Fibonacci ke-1
        angkaFibonacciKeNol = angkaFibonacciKeSatu;

        // Dan setiap kali looping Angka Fibonacci ke-1 nilainya akan diganti dengan nilai dari Angka Fibonacci ke-2
        angkaFibonacciKeSatu = angkaFibonacciKeDuaDST;

        // Dan Hasilnya Angka Fibonacci ke-N-dst adalah hasil penjumlahan yang disimpan pada angkaFibonacciKeDuaDst
        hasilFibonacci = `Angka Fibonacci ke ${i} adalah ${angkaFibonacciKeDuaDST}`;
    }

    // Output Semuan Angka Fibonacci ke N
    console.log(hasilFibonacci);

}

// Output Angka Fibonacci ke N
console.log(hasilFibonacci);