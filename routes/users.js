const express = require('express');
const router = express.Router();

// Rute GET untuk /users/get
router.get('/get', (req, res) => {
    res.send('This is the GET response for /users/get');
});

module.exports = router;
