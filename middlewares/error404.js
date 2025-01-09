const path = require('path');

module.exports = (req, res, next) => {
    console.log(path.join(__dirname, 'public', 'error404.html'));
    res.status(404).sendFile(path.join(__dirname, '../public', 'error404.html'));
};