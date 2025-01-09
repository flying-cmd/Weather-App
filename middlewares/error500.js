const path = require('path');

module.exports = (err, req, res, next) => {
    console.log(err);
    res.status(500).sendFile(path.join(__dirname, '../public', 'error500.html'));
};