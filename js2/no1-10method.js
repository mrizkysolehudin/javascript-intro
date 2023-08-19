// 1. push()
// Adalah method yang digunakan untuk menambahkan satu atau lebih elemen ke akhir array.
let buah = ["mangga", "anggur"];
buah.push("leci", "jambu");
console.log(buah); // [ 'mangga', 'anggur', 'leci', 'jambu' ]

// 2. pop()
// Adalah method yang digunakan untuk hapus satu elemen terakhir dari array dan mengembalikan elemen yang dihapus.
let buah2 = ["mangga", "leci", "anggur"];
let hapusBuah = buah2.pop();
console.log(hapusBuah); // anggur
console.log(buah2); // [ 'mangga', 'leci' ]

// 3. shift()
// Adalah method yang digunakan untuk menghapus elemen pertama dari array.
let warna = ["biru", "hitam", "putih"];
let hapusWarna = warna.shift();
console.log(hapusWarna); // biru
console.log(warna); // [ 'hitam', 'putih' ]

// 4. unshift()
// Adalah method yang digunakan untuk menambahkan satu atau lebih elemen ke awal array.
let warna2 = ["hitam", "putih"];
warna2.unshift("kuning");
console.log(warna2); // [ 'kuning', 'hitam', 'putih' ]

// 5. concat()
// Adalah method yang digunakan untuk menggabungkan dua atau lebih array dan mengembalikan array baru yang telah digabungkan.
let arr1 = [1, 2];
let arr2 = [3, 4];
let arrAll = arr1.concat(arr2);
console.log(arrAll); // [1, 2, 3, 4]

// 6. slice()
// Adalah method yang digunakan untuk mengambil sebagian elemen array dan mengembalikannya sebagai array baru.
let huruf = ["a", "b", "c", "d", "e"];
let potongHuruf = huruf.slice(1, 3);
console.log(potongHuruf); //  ['b', 'c']

// 7. indexOf()
// Adalah method yang digunakan untuk mengetahui index dari suatu elemen dalam sebuah array
// dan mengembalikan index pertama yang ditemukan atau -1 jika tidak ada elemen yang ditemukan.
let buah3 = ["mangga", "anggur", "leci"];
let indexLeci = buah3.indexOf("leci");
console.log(indexLeci); // 2

// 8. find()
// Adalah method yang digunakan untuk mendapatkan elemen pertama yang memenuhi kondisi yang diberikan oleh fungsi callback.
let angka = [1, 2, 3, 4, 5];
let hasil = angka.find((item) => item > 3);
console.log(hasil); // 4

// 9. filter()
// Adalah method yang digunakan untuk mendapatkan seluruh elemen yang memenuhi kondisi yang diberikan oleh fungsi callback.
let angka2 = [1, 2, 3, 4, 5];
let filterAngka = angka2.filter((item) => item >= 3);
console.log(filterAngka); // [ 3, 4, 5 ]

// 10. includes()
// Adalah method yang digunakan untuk memeriksa apakah array memiliki elemen tertentu dan mengembalikan nilai true atau false.
let buah4 = ["jeruk", "apel", "anggur"];
let punyaJeruk = buah4.includes("jeruk");
console.log(punyaJeruk); // true
