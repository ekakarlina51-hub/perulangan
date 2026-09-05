const output = document.getElementById("output");
const inputAngka = prompt("Msukkan angka");
const angka = Number(inputAngka);
let hasil = "";
let i = 1;
while (i <= angka) {
    hasil += i + "<br>";
    i++;
}
if (output) {
    output.innerHTML = hasil;
}
export {};
