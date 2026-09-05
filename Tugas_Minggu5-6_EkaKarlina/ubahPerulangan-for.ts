export {};
const output = document.getElementById('output');
const inputAngka : string | null = prompt('Masukkan N');

const angka: number = Number(inputAngka);

let hasil: string = "";
let i = 1;
while (i <= angka) {
    hasil += i + "<br>";
    i++;
}

if (output) {
    output.innerHTML = hasil;
}