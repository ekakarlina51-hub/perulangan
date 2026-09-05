"use strict";
const output = document.getElementById('output');
const inputAngka = prompt('Masukkan Angka');
const angka = Number(inputAngka);
let hasil = "";
for (let i = 2; i <= angka; i += 2) {
    hasil += i + " ";
}
if (output) {
    output.innerHTML = hasil;
}
