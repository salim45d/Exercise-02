///////////////////////
//ODD OR EVEN NUMBER//
/////////////////////

let numberOddOrEven  : number = 25;    // Bisa dirubah sesuai nilai angka yang ingin dicari bilangan ganjil atau genapnya
let resultNumberOddEven : string = '';  // Variable untuk menyimpan hasil

//init = 0, setiap looping akan mengeveluasi pengkondisian 'jika true task dijalankan dan jika false keluar dari looping', kemudian nilai i akan ditambah 1
for(let i : number = 0; i <= numberOddOrEven; i++) {

    // Jika variable i habis dibagi 2 maka Bilangan Genap
    if(i % 2 === 0) {

        resultNumberOddEven = `${i} : Bilangan Genap/Even Number`;
    
    // Dan selain disebutkan diatas maka Bilangan Ganjil
    } else {

        resultNumberOddEven = `${i} : Bilangan Ganjil/Odd Number`;

    }
}

// Output
console.log(resultNumberOddEven);