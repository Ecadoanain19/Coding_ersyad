const readline = require('readline');

// Membuat interface untuk input/output di terminal

// Pertanyaan pertama
rl.question('Masukan nama: ', (nm) => {
  // Pertanyaan kedua
  rl.question('Masukan tempat tinggal: ', (rmh) => {
    // Pertanyaan ketiga
    rl.question('Masukan tahun lahir: ', (thn) => {
      const tahun = parseInt(thn); // pengonversian string ke integer

      // Format hasil string
      const identity = `Nama saya ${nm} tinggal di ${rmh} tahun lahir ${thn}`;
        console.log(identity); // Menampilkan hasil

      rl.close(); // Setelah selesai akan tutup
    });
  });
});
