// Middleware untuk logging permintaan
function logger(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Melanjutkan ke middleware berikutnya atau handler rute
  }
  
  module.exports = logger;
  