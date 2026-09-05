const output = document.getElementById('output');
const inputAngka : string | null = prompt('Masukkan Angka');

const angka: number = Number(inputAngka);

let hasil: string = "";
for (let i = 2; i <= angka; i += 2) {
    hasil += i + " ";
}

if (output) {
    output.innerHTML = hasil;
}