const output = document.getElementById("output");
const inputAngka = prompt("Masukkan angka");
const angka = Number(inputAngka);
let hasil = "";
let i = 1;
while (i <= angka) {
    hasil += `Percobaan ke-${i}<br>`;
    i++;
}
if (output) {
    output.innerHTML = hasil;
}
export {};
