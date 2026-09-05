"use strict";
const outputHasil = document.getElementById("outputHasil");
const inputAngka = prompt("Masukkan angka");
const angka = Number(inputAngka);
let hasil = "";
for (let i = 1; i <= 10; i++) {
    hasil += `${i} x ${angka} = ${i * angka}<br>`;
}
if (outputHasil) {
    outputHasil.innerHTML = hasil;
}
