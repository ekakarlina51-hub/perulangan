export {};
const output: HTMLElement | null = document.getElementById("output");
const inputAngka: string | null = prompt("Msukkan angka");
const angka: number = Number(inputAngka);

let hasil = "";
let i = 1;
while (i <= angka) {
    hasil += i + "<br>";
    i++;
}

if (output) {
    output.innerHTML = hasil;
}