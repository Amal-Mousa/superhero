const path = require('path')

const clientError = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../../public/404.html'));
}

const serverError = (req, res,next) => {
    res.status(500).sendFile(path.join(__dirname, '../../public/500.html'));
    next();
}

module.exports = { clientError, serverError };