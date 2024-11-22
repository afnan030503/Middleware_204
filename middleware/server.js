const express = require('express');
const app = express();
const port = 3000;

// Mengimpor middleware dan rute
const logger = require('./logger');
const usersRoutes = require('../routes/users');

// Middleware untuk logging
app.use(logger);

// Rute utama untuk menampilkan informasi pribadi
app.get('/', (req, res) => {
  res.send(`
    <h1>Nama: Afnan Maulidi</h1>
    <h2>NIM: 20220140204</h2>
    <h3>Kelas: D</h3>
  `);
});

// Menggunakan rute untuk /users
app.use('/users', usersRoutes);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
