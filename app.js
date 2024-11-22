const express = require('express');
const app = express();
const port = 3000;

// Mengimpor middleware dan rute
const logger = require('./middleware/logger');
const usersRoutes = require('./routes/users');

// Menggunakan middleware global untuk logging
app.use(logger);

// Menggunakan rute untuk /users
app.use('/users', usersRoutes);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
