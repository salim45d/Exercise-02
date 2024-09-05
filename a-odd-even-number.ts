///////////////////////
//ODD OR EVEN NUMBER//
/////////////////////

let numberOddOrEven: number = 25; // Bisa dirubah sesuai nilai angka yang ingin dicari bilangan ganjil atau genapnya
let resultNumberOddEven: string = ""; // Variable untuk menyimpan hasil

// Jika variable i habis dibagi 2 maka Bilangan Genap
if (numberOddOrEven % 2 === 0) {
  resultNumberOddEven = `${numberOddOrEven} : Bilangan Genap/Even Number`;

  // Dan selain disebutkan diatas maka Bilangan Ganjil
} else {
  resultNumberOddEven = `${numberOddOrEven} : Bilangan Ganjil/Odd Number`;
}

// Output
console.log(resultNumberOddEven);
