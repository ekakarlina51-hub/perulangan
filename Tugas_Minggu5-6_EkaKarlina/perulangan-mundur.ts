const output = document.getElementById("output");

const input: string | null = prompt("Masukkan batas angka:");
const angkaAwal: number = Number(input);

let hasil: string = "";

for (let i = angkaAwal; i >= 1; i--) {
  hasil += i + " ";
}

hasil +=  "Selamat Tahun Baru!";

if (output) {
  output.innerHTML = hasil;
}