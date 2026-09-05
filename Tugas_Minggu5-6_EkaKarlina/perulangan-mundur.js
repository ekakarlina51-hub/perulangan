const output = document.getElementById("output");
const input = prompt("Masukkan angka awal:");
const angkaAwal = Number(input);
let hasil = "";
for (let i = angkaAwal; i >= 1; i--) {
    hasil += i + "";
}
hasil += "Selamat Tahun Baru!";
if (output) {
    output.innerHTML = hasil;
}
export {};
