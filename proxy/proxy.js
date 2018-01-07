var proxy = require('http-proxy-middleware');

var options = {
    target : 'http://localhost:8080',
    changeOrigin : true
};

module.exports = proxy(options);