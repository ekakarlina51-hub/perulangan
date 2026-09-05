"use strict";
const output = document.getElementById('output');
const inputAngka = prompt('Masukkan N');
const angka = Number(inputAngka);
let hasil = "";
for (let i = 1; i <= angka; i++) {
    hasil += i + " ";
}
if (output) {
    output.innerHTML = hasil;
}
