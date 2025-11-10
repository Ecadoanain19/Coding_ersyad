// script.js
// -----------------------------------------------------------------------------
// Contoh penggunaan var dan if
// -----------------------------------------------------------------------------

// 1. Deklarasi variabel
var nama   = "Ibnu";
var usia   =16;          // usia dalam tahun
var status = "Belum menikah";

// 2. Kondisi if
if (usia >= 18) {
  // Jika sudah dewasa
  console.log(nama + " adalah orang dewasa.");
} else {
  // Jika masih anak-anak / remaja
  console.log(nama + " masih di bawah umur.");
}

// 3. Kondisi tambahan (contoh)
if (usia >= 25 && status === "Belum menikah") {
  console.log(nama + " sudah cukup dewasa untuk mempertimbangkan pernikahan.");
} else if (usia < 25) {
  console.log(nama + " masih terlalu muda untuk menikah.");
} else {
  console.log(nama + " sudah menikah.");
}
