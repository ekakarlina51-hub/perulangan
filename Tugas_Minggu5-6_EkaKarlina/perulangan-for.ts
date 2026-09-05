const output = document.getElementById('output');
const inputAngka : string | null = prompt('Masukkan N');

const angka: number = Number(inputAngka);

let hasil: string = "";
for (let i = 1; i <= angka; i++) {
    hasil += i + " ";
}

if (output) {
    output.innerHTML = hasil;
}