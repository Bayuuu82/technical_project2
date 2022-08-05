
// let nama = document.getElementById("nama");
// let berat = document.getElementById("berat");
// let tinggi = document.getElementById("tinggi");
// function hitung()
// ambil semua kebutuhan dari html
let userform = document.getElementById("form");
let button = document.getElementsByClassName("button");
let outHasil = document.getElementsByClassName("hasil");


// buat event form untuk mengeksekusi isi form
userform.addEventListener('submit', function (event) {
    // untuk devault supaya tidak refresh karna males pake button
    event.preventDefault();
    // isialisasikan value yang di masukan dalam form menjadi object karna saya lebih ngerti
    let formobject = new FormData(userform)
    let formvalue = Object.fromEntries(formobject)
    
    // formvalue.nama
    // formvalue.berat
    // formvalue.tinggi
    
    console.log(formvalue.nama, formvalue.berat, formvalue.tinggi)
    // `Berat Badan/(Tinggi Badan/100)^2`;
    let caritinggi = formvalue.tinggi/100;
    let pangkat = caritinggi**2;
    let bmi = formvalue.berat/pangkat;
    console.log(bmi);
});